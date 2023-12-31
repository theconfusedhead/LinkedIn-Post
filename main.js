const template = this.document.getElementById('template');
const result = this.document.getElementById('result')
html2canvas(template).then(canvas => {
result.appendChild(canvas)
let cvs = document.querySelector('canvas')
let downloadBtn =  document.querySelector('.downloadBtn')
downloadBtn.href =  cvs.toDataURL();
downloadBtn.download = "linkedInPost.png"
});