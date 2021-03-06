import Word from "./Img/word.png";
import Excel from "./Img/excel.png";
import Powerpoint from "./Img/powerpoint.png";
import Iword from "./Img/iWord.png";
import Jpg from "./Img/jpg.png";
import Ebook from "./Img/ebook.png";
import Pdf from "./Img/PDF.png";
import Merge from "./Img/merge.png";
import Split from "./Img/split.png";
import Protect from "./Img/lock.png";
import Unlock from "./Img/unlocked.png";
import Delete from "./Img/remove.png";

const Files = [
    {
        id: 1,
        img: Word,
        label: "word",
        titleT: "word to pdf",
        titleF: "pdf to word",
        linkT: "word-to-pdf",
        linkF: "pdf-to-word",
        file: ".doc",
        filePdf: ".pdf",
        color: "#1565C0",
        qiymat: true 
    },
    {
        id: 2,
        img: Excel,
        label: "excel",
        titleT: "excel to pdf",
        titleF: "pdf to excel",
        linkT: "excel-to-pdf",
        linkF: "pdf-to-excel",
        filePdf: ".pdf",
        file: ".csv, .xls, .xlsb, .xlt, .xltx, .xlsx",
        color: "#2E7D32",
        qiymat: true 
    },
    {
        id: 3,
        img: Powerpoint,
        label: "powerpoint",
        titleT: "PowerPoint to pdf",
        titleF: "pdf to PowerPoint",
        linkT: "powerpoint-to-pdf",
        linkF: "pdf-to-powerpoint",
        filePdf: ".pdf",
        file: ".pot, .potx, .pps, .ppsx, .ppt, .pptx",
        color: "#FF5722",
        qiymat: true 
    },
    {
        id: 4,
        img: Jpg,
        label: "jpg",
        titleT: "JPG to pdf",
        titleF: "pdf to JPG",
        linkT: "jpg-to-pdf",
        linkF: "pdf-to-jpg",
        file: "image/*",
        filePdf: ".pdf",
        color: "#26B99A",
        qiymat: true 
    },
    {
        id: 5,
        img: Iword,
        label: "iword",
        titleT: "iWord to pdf",
        titleF: "pdf to iWord",
        linkT: "iword-to-pdf",
        linkF: "pdf-to-iword",
        file: ".key, .numbers, .pages",
        filePdf: ".pdf",
        color: "#0485BD",
        qiymat: true 
    },
    {
        id: 6,
        img: Ebook,
        label: "ebook",
        titleT: "eBooks to pdf",
        titleF: "pdf to eBooks",
        linkT: "ebooks-to-pdf",
        linkF: "pdf-to-ebooks",
        file: ".azv, .azv1, .azv3, .azv4, .epub, .mobi, .prc, .tpz, .lit, .cbz, .cbr, .cbc, .chm, .djvu, .lrf, .prc, .pml, .snb, .tcr",
        filePdf: ".pdf",
        color: "#F55A8E",
        qiymat: true  
    },
    {
        id: 7,
        img: Pdf,
        label: "pdf",
        titleT: "PDF to PDF/A",
        titleF: "PDF/A to PDF",
        linkT: "pdfa-to-pdf",
        linkF: "pdf-to-pdfa",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#E93827",
        qiymat: false  
    },
    {
        id: 8,
        img: Merge,
        label: "merge",
        titleT: "Marge PDF",
        linkT: "merge",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#1BB7EA",
        qiymat: false  
    },
    {
        id: 9,
        img: Split,
        label: "split",
        titleT: "Split PDF",
        linkT: "split",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#F57F17",
        qiymat: false  
    },
    {
        id: 10,
        img: Protect,
        label: "Protect",
        titleT: "protect PDF",
        linkT: "protect",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#426274",
        qiymat: false  
    },
    {
        id: 11,
        img: Unlock,
        label: "unclock",
        titleT: "unclock PDF",
        titleF: "pdf to eBooks",
        linkT: "unclock",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#8EE26B",
        qiymat: false  
    },
    {
        id: 12,
        img: Delete,
        label: "delete",
        titleT: "Delete PDF Pages",
        titleF: "pdf to eBooks",
        linkT: "delete",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#F44336",
        qiymat: false  
    }
]

export default Files;