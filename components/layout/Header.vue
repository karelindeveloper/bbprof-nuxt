<script lang="ts" setup>

</script>

<template>
	<header class='py-4'>
		<div class='container flex items-center justify-between '>
			<div class='flex items-center gap-12'>
				<NuxtLink to='/'>
					<NuxtImg src='logo.png' alt='' width='124px' />
				</NuxtLink>
				<nav class='flex items-center gap-7'>
					<NuxtLink to='/catalog'>Каталог</NuxtLink>
					<NuxtLink to='/delivery'>Доставка и оплата</NuxtLink>
					<NuxtLink to='/contacts'>Контакты</NuxtLink>
					<NuxtLink to='/blog'>Блог</NuxtLink>
				</nav>
			</div>
			<div class='flex gap-5 nav-icons'>
				<button>
					<NuxtImg src='search.svg' alt='Поиск' width='24px' />
				</button>
				<NuxtLink to='/favorites'>
					<NuxtImg src='favorites.svg' alt='Любимое' width='24px' />
				</NuxtLink>
				<NuxtLink to='/profile'>
					<NuxtImg src='profile.svg' alt='Личный кабинет' width='24px' />
				</NuxtLink>
				<NuxtLink to='/basket'>
					<NuxtImg src='basket.svg' alt='Корзина' width='24px' />
				</NuxtLink>
			</div>
		</div>
	</header>
</template>
