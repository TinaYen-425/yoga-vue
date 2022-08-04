export default (await import('vue')).default.extend({
data() {
return {
products: []
};
},
components: { productModal }
});
