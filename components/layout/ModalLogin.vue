<template>
	<section
		class='fixed z-20 top-0 right-0 bottom-0 bg-background w-screen max-w-[860px] py-5 px-4 flex items-center justify-center'>
		<div class='max-w-[510px]'>
			<h1 class='text-5xl leading-none font-bold mb-4'>Войти / Зарегистрироваться</h1>
			<p class='mb-6'>Мы отправим на номер SMS-сообщение с кодом подтверждения.</p>
			<UiInput class='mb-7' type='number' placeholder='+7' />
			<UiButton size='lg'>Получить код</UiButton>
		</div>
		<UiButton class='absolute top-8 right-12 w-8 h-8' variant='destructive' size='icon'>
			<NuxtImg class='w-full h-full' src='close_modal.svg' alt='Выйти' />
		</UiButton>
	</section>
</template>