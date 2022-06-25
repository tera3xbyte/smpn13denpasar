<script setup>
	
</script>

<template>
	<nav class="fixed flex justify-evenly items-center z-10 w-screen p-4 left-0 top-0 border-b border-black bg-opacity-30 backdrop-filter backdrop-blur-lg ">
		<div class="flex items-center">
			<img class="h-16 w-16 mx-5" src="../../public/img/logo_sekolah.png" alt="">
			<div class="flex flex-col">
				<h1 class="text-xl font-sans text-_purple">SMP Negeri 13</h1>
				<h3 class="text-lg  font-sans text-_purple">Denpasar</h3>
			</div>
		</div>
		<ul class="flex gap-5 text-md items-center">
			
			<li> 
				<button type="button" id="dropdownDefault" data-dropdown-toggle="dropdown" class="">Beranda</button>
				<div id="dropdown" class="z-10 hidden bg-white ">	
					<ul class="py-1 text-sm text-500-blue" aria-labelledby="dropdownDefault">
						<li>Berita</li>
						<li>Daftar</li>
						<li>Alumni</li>
					</ul>
				</div>
			</li>


			<li>
				<button>Tentang Kami</button>
			</li>
			<li>
				<button>Program</button>
			</li>
			<li>
				<button>Alumni</button>
			</li>
			<li>
				<button>
					Hubungi kami
				</button>
			</li>
		</ul>
		<!-- <div class="flex items-baseline px-10 gap-2 ">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
			  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
			  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
			  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
			</svg>
		</div> -->
	</nav>
</template>


<style type="text/css" scoped>
	/* * {
		outline: 3px solid black;
	}
 */
</style>