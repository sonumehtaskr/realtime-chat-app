const fileTypeIcons = [
  {
    extension: "txt",
    description: "Text File",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="#f4f4f4" stroke="#000" stroke-width="2"/>
              <text x="50" y="50" font-size="12" text-anchor="middle" fill="#000">.txt</text>
              <text x="50" y="70" font-size="8" text-anchor="middle" fill="#000">Text File</text>
            </svg>`,
  },
  {
    extension: "pdf",
    description: "PDF File",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="#ff4f4f" stroke="#000" stroke-width="2"/>
              <text x="50" y="40" font-size="16" text-anchor="middle" fill="#fff">.pdf</text>
              <text x="50" y="60" font-size="8" text-anchor="middle" fill="#fff">PDF File</text>
            </svg>`,
  },
  {
    extension: "jpg",
    description: "Image File",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="#a9c6f1" stroke="#000" stroke-width="2"/>
              <text x="50" y="40" font-size="16" text-anchor="middle" fill="#000">.jpg</text>
              <text x="50" y="60" font-size="8" text-anchor="middle" fill="#000">Image File</text>
            </svg>`,
  },
  {
    extension: "js",
    description: "JavaScript File",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="#f7df1e" stroke="#000" stroke-width="2"/>
              <text x="50" y="40" font-size="16" text-anchor="middle" fill="#000">.js</text>
              <text x="50" y="60" font-size="8" text-anchor="middle" fill="#000">JavaScript</text>
            </svg>`,
  },
  {
    extension: "html",
    description: "HTML File",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="#e44d26" stroke="#000" stroke-width="2"/>
              <text x="50" y="40" font-size="16" text-anchor="middle" fill="#fff">.html</text>
              <text x="50" y="60" font-size="8" text-anchor="middle" fill="#fff">HTML File</text>
            </svg>`,
  },
  {
    extension: "css",
    description: "CSS File",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="#264de4" stroke="#000" stroke-width="2"/>
              <text x="50" y="40" font-size="16" text-anchor="middle" fill="#fff">.css</text>
              <text x="50" y="60" font-size="8" text-anchor="middle" fill="#fff">CSS File</text>
            </svg>`,
  },
  {
    extension: "csv",
    description: "CSV File",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="#2c9c4b" stroke="#000" stroke-width="2"/>
              <text x="50" y="40" font-size="16" text-anchor="middle" fill="#fff">.csv</text>
              <text x="50" y="60" font-size="8" text-anchor="middle" fill="#fff">CSV File</text>
            </svg>`,
  },
  {
    extension: "xlsx",
    description: "Excel File",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="#217346" stroke="#000" stroke-width="2"/>
              <text x="50" y="40" font-size="16" text-anchor="middle" fill="#fff">.xlsx</text>
              <text x="50" y="60" font-size="8" text-anchor="middle" fill="#fff">Excel File</text>
            </svg>`,
  },
  {
    extension: "md",
    description: "Markdown File",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="#000000" stroke="#fff" stroke-width="2"/>
              <text x="50" y="40" font-size="16" text-anchor="middle" fill="#fff">.md</text>
              <text x="50" y="60" font-size="8" text-anchor="middle" fill="#fff">Markdown File</text>
            </svg>`,
  },
  {
    extension: "zip",
    description: "ZIP File",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="#ff9900" stroke="#000" stroke-width="2"/>
              <text x="50" y="40" font-size="16" text-anchor="middle" fill="#000">.zip</text>
              <text x="50" y="60" font-size="8" text-anchor="middle" fill="#000">ZIP File</text>
            </svg>`,
  },
  {
    extension: "java",
    description: "Java File",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="#5382a1" stroke="#000" stroke-width="2"/>
              <text x="50" y="40" font-size="16" text-anchor="middle" fill="#fff">.java</text>
              <text x="50" y="60" font-size="8" text-anchor="middle" fill="#fff">Java File</text>
            </svg>`,
  },
];


function getFileTypeIcon(url) {
  const fileExtension = url.split(".").pop();
  if (fileExtension) {
    const fileType = fileTypeIcons.find(
      (item) => item.extension === fileExtension
    );
    if (fileType) {
      return fileType.svg;
    }
  }
  return fileTypeIcons[0].svg;
}

export default getFileTypeIcon;
