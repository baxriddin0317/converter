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
import Converter from "./Img/convert.png";
import Compres from "./Img/compres.png";
import Delete from "./Img/remove.png";
import Rotate from "./Img/rotate.png";

const Files = [
    {
        id: 1,
        img: Word,
        label: "word",
        titleT: "word to pdf",
        titleF: "pdf to word",
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
        file: ".key, .numbers, .pages",
        filePdf: ".pdf",
        color: "#05CDFF",
        qiymat: true 
    },
    {
        id: 6,
        img: Ebook,
        label: "ebook",
        titleT: "eBooks to pdf",
        titleF: "pdf to eBooks",
        file: ".azv, .azv1, .azv3, .azv4, .epub, .mobi, .prc, .tpz, .lit, .cbz, .cbr, .cbc, .chm, .djvu, .lrf, .prc, .pml, .snb, .tcr",
        filePdf: ".pdf",
        color: "#F55A8E",
        qiymat: true  
    },
    {
        id: 7,
        img: Pdf,
        label: "ebook",
        titleT: "PDF to PDF/A",
        titleF: "PDF/A to PDF",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#F55A8E",
        qiymat: false  
    },
    {
        id: 8,
        img: Merge,
        label: "ebook",
        titleT: "Marge PDF",
        titleF: "pdf to eBooks",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#F55A8E",
        qiymat: false  
    },
    {
        id: 9,
        img: Split,
        label: "ebook",
        titleT: "Split PDF",
        titleF: "pdf to eBooks",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#F55A8E",
        qiymat: false  
    },
    {
        id: 10,
        img: Protect,
        label: "ebook",
        titleT: "protect PDF",
        titleF: "pdf to eBooks",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#F55A8E",
        qiymat: false  
    },
    {
        id: 11,
        img: Unlock,
        label: "ebook",
        titleT: "unclock PDF",
        titleF: "pdf to eBooks",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#F55A8E",
        qiymat: false  
    },
    {
        id: 12,
        img: Converter,
        label: "ebook",
        titleT: "PDF converter",
        titleF: "pdf to eBooks",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#F55A8E",
        qiymat: false  
    },
    {
        id: 13,
        img: Compres,
        label: "ebook",
        titleT: "compress PDf",
        titleF: "pdf to eBooks",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#F55A8E",
        qiymat: false  
    },
    {
        id: 14,
        img: Delete,
        label: "ebook",
        titleT: "Delete PDF Pages",
        titleF: "pdf to eBooks",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#F55A8E",
        qiymat: false  
    },
    {
        id: 15,
        img: Rotate,
        label: "ebook",
        titleT: "Rotate PDF",
        titleF: "pdf to eBooks",
        file: ".pdf",
        filePdf: ".pdf",
        color: "#F55A8E",
        qiymat: false  
    },
]

export default Files;