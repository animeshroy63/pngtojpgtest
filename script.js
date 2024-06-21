// scripts.js
document.getElementById('convertButton').addEventListener('click', function() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];

    if (file && file.type === 'image/png') {
        const reader = new FileReader();

        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.getElementById('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                
                const jpgDataUrl = canvas.toDataURL('image/jpeg', 0.95);
                const downloadLink = document.getElementById('downloadLink');
                downloadLink.href = jpgDataUrl;
                downloadLink.style.display = 'block';
            }
            img.src = event.target.result;
        }

        reader.readAsDataURL(file);
    } else {
        alert('Please upload a valid PNG image.');
    }
});
