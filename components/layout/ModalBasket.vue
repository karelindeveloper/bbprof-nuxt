<template>
	<section class='fixed z-20 top-0 right-0 bottom-0 bg-background w-screen max-w-[860px] py-16 px-24'>
		<div>
			<h1 class='text-5xl font-bold mb-8'>Корзина</h1>
		</div>
		<ul>
			<li>
				<div>

				</div>
			</li>
		</ul>
		<UiButton size='lg'>Оформить заказ</UiButton>
		<UiButton class='absolute top-8 right-12 w-8 h-8' variant='destructive' size='icon'>
			<NuxtImg class='w-full h-full' src='close_modal.svg' alt='Выйти' />
		</UiButton>
	</section>
</template>
