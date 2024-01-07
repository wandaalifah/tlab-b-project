<template>
    <div class="flex justify-between items-center my-4">
        <div>
            <p class="text-sm text-grey-900">1 - 10 dari 999 Produk</p>
        </div>
        <div class="text-xs font-normal">
            <ul class="inline-flex items-center">
                <li class="mr-2">
                    <a href="#" class="block px-2 py-2 ml-0 leading-tight border rounded border-primary-500">
                        <span class="sr-only">Previous</span>
                        <svg aria-hidden="true" class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </li>
                <li class="mr-2">
                    <a href="#" class="block px-3 py-2 ml-0 leading-tight border rounded border-primary-500">1</a>
                </li>
                <li class="mr-2">
                    <a href="#" class="block px-3 py-2 ml-0 leading-tight border rounded border-primary-500">2</a>
                </li>
                <li class="mr-2">
                    <a href="#" class="block px-3 py-2 ml-0 leading-tight border rounded border-primary-500">3</a>
                </li>
                <li>
                    <a href="#" class="block px-2 py-2 ml-0 leading-tight border rounded border-primary-500">
                        <span class="sr-only">Next</span>
                        <svg aria-hidden="true" class="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pagination'
}
</script>

<style>

</style>