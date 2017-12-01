<template>
<div class="CounterButton">
	<button class="button"
		@click.prevent="increment">
		{{count}}
	</button>
	<!-- {{test}} -->
</div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

/**
 * Button that counts how many times it was pressed and exposes a `@public` method to reset itself.
 */
export default {
	name: "CounterButton",
	data() {
		return {
			value: 0,
		};
	},
	computed: {
		...mapGetters(["test", "count"]),
	},
	methods: {
		/**
		 * Increments the counter. This method is not marked @public and is not visible in the styleguide.
		 */
		increment() {
			value = count;
			this.value++;
			/**
			 * After increment event
			 * @event after
			 * @type {number}
			 */
			this.$emit("after", this.value);
		},
		/**
		 * Sets the counter to a particular value.
		 *
		 * @public
		 * @version 1.0.5
		 * @param {Number} newValue New value for the counter
		 * @returns {string} Test
		 */
		set(newValue) {
			this.value = parseInt(newValue, 10);
		},
	},
};
</script>
