<template>
  <div id="mygallery">
    <div id="filters">
      <form>
        <fieldset>
            <legend>Filter</legend>
            <span>
                <input type="radio" id="all" name="filters" checked v-on:click="updateFilter('all')" />
                <label for="all">All</label>
            </span>
            <span>
                <input type="radio" id="animals" name="filters" v-on:click="updateFilter('animals')" />
                <label for="animals">Animals</label>
            </span>
            <span>
                <input type="radio" id="nature" name="filters" v-on:click="updateFilter('nature')" />
                <label for="nature">Nature</label>
            </span>
        </fieldset>
      </form>
    </div>

    <transition-group name="thumbnailfade" tag="div">
      <img v-for="thumb in filteredImages" :key="thumb.id" 
           @click="showLightbox(thumb.name)"  :src="thumbnailDir + thumb.name" :alt="thumb.alt" :title="thumb.alt" />
    </transition-group>

    <lightbox ref="lightbox"
      :images="images"
      :directory="thumbnailDir"
      :filter="galleryFilter"
      :timeoutDuration="5000"
    ></lightbox>
  </div>
</template>

<script>
import homerImg from '../assets/gallery/homer.png'
import lionImg from '../assets/gallery/lion.jpg'
import myselfImg from '../assets/gallery/mypic.jpg'

var imageList = [{'name':homerImg, 'alt':'Homer Simpson', 'filter':'nature', 'id':'image1' },
               {'name':lionImg, 'alt':'A hughe lion!', 'filter':'animals', 'id':'image2' }, 
               {'name':myselfImg, 'alt':'Myself', 'filter':'animals', 'id':'image3' }];

export default {
  name: 'mygallery',
  data () {
    return {
      thumbnailDir: '.',
      images: imageList,
      galleryFilter: 'all',
    }
  },
  methods: {
    showLightbox: function(imageName) {
      this.$refs.lightbox.show(imageName);
    },
    updateFilter(filterName) {
      this.galleryFilter = filterName;
    }
  },
  computed: {
    filteredImages: function() {
      if (this.galleryFilter === 'all') {
        return this.images;
      } else {
        return this.images.filter(image => image.filter === this.galleryFilter);
      }
    }
  }
}
</script>

<style scoped> 
#mygallery {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color: #3a3838;
}

#filters {
  width: 500px;
  margin: 30px auto;
}

#filters span {
  margin: 15px;
}

img {
  width: 270px;
  height: 180px;
  margin: 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.thumbnailfade-leave-active,
.thumbnailfade-enter-active {
  transition: all 0.4s ease;
}

.thumbnailfade-enter-active {
  transition-delay: 0.4s;
}

.thumbnailfade-enter,
.thumbnailfade-leave-to {
  opacity: 0;
}
</style>