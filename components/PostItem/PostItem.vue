<template>
	<NuxtLink to='/posts/1' class='col-span-4 hover:text-accent-foreground relative'>
		<NuxtImg class='mb-2 w-full' src='demo_post.png' alt='Фото к посту' />
		<h3 class='text-xl mb-1'>Эксперт назвал способный удивить любую женщину цветок</h3>
		<p class='line-clamp-3 text-card-foreground'>Протея — это тот цветок, который может вызвать умиление, восторг и
			восхищение у любой
			женщины. Такую точку зрения
			выразили эксперты, опрошенны были все слова до единого оказались грязной ложью</p>
		<div
			class='font-accent text-xs bg-foreground absolute top-4 right-5 text-background text-center flex flex-col items-center justify-center w-[100px] h-[78px]'>
			<span class='text-4xl leading-none'>25</span>
			<span>сентября</span>
		</div>
	</NuxtLink>
</template>
