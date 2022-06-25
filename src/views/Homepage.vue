<script setup>
	import Navbar from '@/components/navbar.vue'

</script>

<template>
	
	<div>
		<Navbar />
		<header class="h-[81vh]  w-[100%] "></header>
	</div>
</template>



<style type="text/css" scoped>
	.custom-shape-divider-top-1655984720 {
	    position: relative;
	    top: 0;
	    left: 0;
	    width: 100%;
	    overflow: hidden;
	    line-height: 0;
	}

	.custom-shape-divider-top-1655984720 svg {
	    position: static;
	    display: block;
	    /* width: calc(187% + 1.3px); */
	    width: 100%;
	    height: 96px;
	    transform: rotateY(180deg);
	}

	.custom-shape-divider-top-1655984720 .shape-fill {
	    fill: #47B5FF;
	}

	/** For tablet devices **/
	@media (min-width: 768px) and (max-width: 1023px) {
	    .custom-shape-divider-top-1655984720 svg {
	        width: calc(208% + 1.3px);
	        height: 90px;
	    }
	}

	/** For mobile devices **/
	@media (max-width: 767px) {
	    .custom-shape-divider-top-1655984720 svg {
	        width: calc(189% + 1.3px);
	        height: 83px;
	    }
	}
</style>