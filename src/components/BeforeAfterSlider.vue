<template>
  <div
      class="before-after-slider"
      @mousedown.prevent="startDragging"
      @touchstart.prevent="startDragging"
  >
    <div class="slider-container">
      <img :src="beforeSrc" class="before-image" />
      <img :src="afterSrc" class="after-image" :style="{ clipPath: clipStyle }" />
      <div class="slider-handle" :style="{ left: sliderPosition + '%' }"></div>
      <div class="label label-after">Vorher</div>
      <div class="label label-before">Nachher</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    beforeSrc: {
      type: String,
      required: true,
    },
    afterSrc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      sliderPosition: 50,
      isDragging: false,
      animationDirection: 1,
      animationFrame: null,
    };
  },
  computed: {
    clipStyle() {
      return `inset(0 ${100 - this.sliderPosition}% 0 0)`;
    },
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startDragging(event) {
      this.isDragging = true;
      window.addEventListener('mousemove', this.onDrag);
      window.addEventListener('mouseup', this.stopDragging);
      window.addEventListener('touchmove', this.onDrag);
      window.addEventListener('touchend', this.stopDragging);
      // Stoppe die Animation während des Draggens
      cancelAnimationFrame(this.animationFrame);
    },
    onDrag(event) {
      if (!this.isDragging) return;
      const sliderRect = this.$el.getBoundingClientRect();
      let clientX = event.clientX || event.touches[0].clientX;
      let position = ((clientX - sliderRect.left) / sliderRect.width) * 100;
      this.sliderPosition = Math.max(0, Math.min(100, position));
    },
    stopDragging() {
      this.isDragging = false;
      window.removeEventListener('mousemove', this.onDrag);
      window.removeEventListener('mouseup', this.stopDragging);
      window.removeEventListener('touchmove', this.onDrag);
      window.removeEventListener('touchend', this.stopDragging);
      //this.startAnimation();
    },
    startAnimation() {
      this.animationFrame = requestAnimationFrame(this.animateSlider);
    },
    animateSlider() {
      if (this.isDragging) return;

      if (this.sliderPosition >= 70) {
        this.animationDirection = -1;
      } else if (this.sliderPosition <= 30) {
        this.animationDirection = 1;
      }
      this.sliderPosition += 0.1 * this.animationDirection; // Geschwindigkeit anpassen

      this.animationFrame = requestAnimationFrame(this.animateSlider);
    },
  },
  beforeDestroy() {
    this.stopDragging();
    cancelAnimationFrame(this.animationFrame);
  },
};
</script>

<style scoped>
.before-after-slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
}

.slider-container {
  position: relative;
  user-select: none;
}

.after-image,
.before-image img {
  width: 100%;
  display: block;
}

.before-image {
  width: 100%;
  display: block;
}

.after-image {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
}

.after-image img {
  width: 100%;
  display: block;
}

.slider-handle {
  position: absolute;
  top: 0;
  width: 1vh;
  height: 100%;
  background-color: rgba(18, 18, 18, 0.5); /* Halbtransparenter Hintergrund */
  cursor: ew-resize;
  z-index: 2;
  transform: translateX(-50%);
}

.slider-handle::before,
.slider-handle::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 8px solid transparent;
}

.slider-handle::before {
  border-right: 8px solid #ffffff;
  left: -14px;
  top: 50%;
  transform: translateY(-50%);
}

.slider-handle::after {
  border-left: 8px solid #ffffff;
  right: -14px;
  top: 50%;
  transform: translateY(-50%);
}

.before-after-slider:hover .slider-handle {
  background-color: #f39c12;
}
.label {
  position: absolute;
  bottom: 10px;
  color: #fff;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  font-size: 1em;
  z-index: 3;
}

.label-before {
  left: 10px;
}

.label-after {
  right: 10px;
}
</style>
