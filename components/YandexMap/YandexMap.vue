<template>
	<div :class="_class" style="position:relative;overflow:hidden;">
		<a href="https://yandex.ru/maps/org/med_partner_rf/69284348893/?utm_medium=mapframe&utm_source=maps"
			style="color:#eee;font-size:12px;position:absolute;top:0px;">Мед-партнер.рф</a><a
			href="https://yandex.ru/maps/56/chelyabinsk/category/beauty_salon_equipment/184106734/?utm_medium=mapframe&utm_source=maps"
			style="color:#eee;font-size:12px;position:absolute;top:14px;">Оборудование и материалы для салонов красоты в
			Челябинске</a><a
			href="https://yandex.ru/maps/56/chelyabinsk/category/sugaring/111105474159/?utm_medium=mapframe&utm_source=maps"
			style="color:#eee;font-size:12px;position:absolute;top:28px;">Шугаринг в Челябинске</a><iframe
			src="https://yandex.ru/map-widget/v1/?from=api-maps&ll=61.422556%2C55.160449&mode=poi&origin=jsapi_2_1_79&poi%5Bpoint%5D=61.421279%2C55.160463&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D69284348893&utm_source=share&z=17.61"
			class='w-full min-h-[400px] h-[70vh]' frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
	</div>
</template>

<script>
export default {
	props: {
		_class: String
	}
}
</script>
