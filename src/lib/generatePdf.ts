import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function generateCompanyProfilePdf(): Promise<void> {
  const response = await fetch('/docs/company-profile.html');
  const html = await response.text();

  const container = document.createElement('div');
  container.style.cssText =
    'position:fixed;top:-99999px;left:-99999px;width:794px;background:#0a0c0f;z-index:-1;';
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
    setTimeout(resolve, 2000);
  });

  await new Promise((r) => setTimeout(r, 300));

  const A4_WIDTH_PX = 794;
  const A4_HEIGHT_PX = 1123;
  const scale = 2;

  const canvas = await html2canvas(container, {
    scale,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#0a0c0f',
    width: A4_WIDTH_PX,
    windowWidth: A4_WIDTH_PX,
  });

  document.body.removeChild(container);

  const pdf = new jsPDF({ unit: 'px', format: 'a4', orientation: 'portrait' });
  const totalPages = Math.ceil(canvas.height / (A4_HEIGHT_PX * scale));

  for (let page = 0; page < totalPages; page++) {
    if (page > 0) pdf.addPage();

    const sliceCanvas = document.createElement('canvas');
    sliceCanvas.width = canvas.width;
    sliceCanvas.height = A4_HEIGHT_PX * scale;
    const ctx = sliceCanvas.getContext('2d')!;
    ctx.fillStyle = '#0a0c0f';
    ctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height);
    ctx.drawImage(
      canvas,
      0, page * A4_HEIGHT_PX * scale,
      canvas.width, A4_HEIGHT_PX * scale,
      0, 0,
      canvas.width, A4_HEIGHT_PX * scale,
    );

    const imgData = sliceCanvas.toDataURL('image/jpeg', 0.95);
    pdf.addImage(imgData, 'JPEG', 0, 0, A4_WIDTH_PX, A4_HEIGHT_PX);
  }

  pdf.save('ThickTek-Company-Profile.pdf');
}
