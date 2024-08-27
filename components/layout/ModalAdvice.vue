<template>
	<section
		class='fixed z-20 top-0 right-0 bottom-0 bg-background w-screen max-w-[860px] py-5 px-4 flex items-center justify-center'>
		<div class='max-w-[510px]'>
			<h1 class='text-5xl leading-normal font-bold mb-4'>Покупай со скидкой</h1>
			<p class='mb-8'>Зарегистрируйтесь, чтобы получить скидку по бонусной карте, начать копить бонусы и оплачивать
				покупки
				подарочными сертификатами.</p>
			<UiButton size='lg'>Войти / Зарегистрироваться</UiButton>
			<UiButton variant='destructive' size='lg'>Продолжить как гость</UiButton>
		</div>
		<UiButton class='absolute top-8 right-12 w-8 h-8' variant='destructive' size='icon'>
			<NuxtImg class='w-full h-full' src='close_modal.svg' alt='Выйти' />
		</UiButton>
	</section>
</template>