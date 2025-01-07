document.addEventListener('alpine:init', () => {
    Alpine.data('fileUpload', () => ({
        images: [],
        previewImages(event) {
            const files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.images.push({ url: e.target.result, name: files[i].name });
                }
                reader.readAsDataURL(files[i]);
            }
        },
        removeImage(index) {
            this.images.splice(index, 1);
        }
    }));
});