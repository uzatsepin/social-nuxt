<template>
    <div class="flex flex-col">

        <!-- Search bar -->

        <div class="relative m-2">
            <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
                <div class="w-6 h-6">
                    <MagnifyingGlassIcon @click="handleSearch" />
                </div>

            </div>
            <input type="text"
                class="flex items-center w-full pl-12 text-sm font-normal text-black dark:text-gray-100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-100 focus:bg-gray-100 dark:focus:bg-dim-900 focus:online-none focus:border focus:border-blue-200 h-9"
                placeholder="Search..." v-model="search">
        </div>
        <SidebarRightPreviewCard title="What's happening">
            <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
                <div>
                    <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatsHappening.title }}</h2>
                    <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row items-center justify-between p-2">
                    <div class="flex flex-row">
                        <img class="h-10 w-10 rounded-full" :src="whoToFollow.avatar" :alt="whoToFollow.name">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
                            <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <button
                            class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">Follow</button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>

        </SidebarRightPreviewCard>
    </div>
</template>
<script setup>

import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
const search = ref('')

const whatsHappeningItems = ref([
    {
        title: 'SpaceX',
        count: '18.8k Tweets'
    },
    {
        title: '#CodingIsFun',
        count: '8.8k Tweets'
    },
    {
        title: '#art',
        count: '2.1k Tweets'
    },
])
const whoToFollowItems = ref([
    {
        name: 'Joe Baiden',
        handle: '@JoeBiden',
        avatar: 'https://picsum.photos/200/200'
    },
    {
        name: 'Joe Baiden',
        handle: '@JoeBiden',
        avatar: 'https://picsum.photos/200/200'
    },
    {
        name: 'Joe Baiden',
        handle: '@JoeBiden',
        avatar: 'https://picsum.photos/200/200'
    }
])

function handleSearch() {
    useRouter().push({
        path: '/path',
        query: {
            q: search.value
        }
    })
}

</script>