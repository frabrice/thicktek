import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function generateCompanyProfilePdf(): Promise<void> {
  const response = await fetch('/docs/company-profile.html');
  const html = await response.text();

  const container = document.createElement('div');
  container.style.cssText =
    'position:fixed;top:-99999px;left:-99999px;width:794px;background:#ffffff;z-index:-1;';
  container.innerHTML = html;
  document.body.appendChild(container);

  await new Promise<void>((resolve) => {
    const fonts = container.querySelectorAll('link[rel="stylesheet"]');
    if (fonts.length === 0) { resolve(); return; }
    let loaded = 0;
    fonts.forEach((link) => {
      const el = link as HTMLLinkElement;
      if (el.sheet) { loaded++; if (loaded === fonts.length) resolve(); return; }
      el.addEventListener('load', () => { loaded++; if (loaded === fonts.length) resolve(); });
      el.addEventListener('error', () => { loaded++; if (loaded === fonts.length) resolve(); });
    });
    setTimeout(resolve, 2500);
  });

  await new Promise((r) => setTimeout(r, 400));

  const A4_WIDTH_PX = 794;
  const A4_HEIGHT_PX = 1123;
  const scale = 2;

  const pageBlocks = container.querySelectorAll('.page-block');

  if (pageBlocks.length === 0) {
    document.body.removeChild(container);
    return;
  }

  const pdf = new jsPDF({ unit: 'px', format: 'a4', orientation: 'portrait' });

  for (let i = 0; i < pageBlocks.length; i++) {
    if (i > 0) pdf.addPage();

    const block = pageBlocks[i] as HTMLElement;

    const canvas = await html2canvas(block, {
      scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: A4_WIDTH_PX,
      height: A4_HEIGHT_PX,
      windowWidth: A4_WIDTH_PX,
    });

    const sliceCanvas = document.createElement('canvas');
    sliceCanvas.width = A4_WIDTH_PX * scale;
    sliceCanvas.height = A4_HEIGHT_PX * scale;
    const ctx = sliceCanvas.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height);
    ctx.drawImage(canvas, 0, 0);

    const imgData = sliceCanvas.toDataURL('image/jpeg', 0.97);
    pdf.addImage(imgData, 'JPEG', 0, 0, A4_WIDTH_PX, A4_HEIGHT_PX);
  }

  document.body.removeChild(container);
  pdf.save('ThickTek-Company-Profile.pdf');
}
