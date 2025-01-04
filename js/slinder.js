function imageSlider() {
    return {
        currentIndex: 0,
        images: ['/imgs/bg1.jpg', '/imgs/bg2.jpg'],
        autoScroll() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
            }, 3000);
        }
    }
}