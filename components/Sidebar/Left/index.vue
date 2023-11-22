<template>
    <div class="flex flex-col h-screen">
        <div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark: bg-white/20" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <LogoTwitter />
                </div>
            </nuxt-link>
        </div>
        <div class="mt-2 space-y-3">
            <SidebarLeftTab active>
                <template v-slot:icon>
                    <HomeIcon />
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <HashtagIcon />
                </template>
                <template v-slot:name>
                    Explore
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <BellIcon />
                </template>
                <template v-slot:name>
                    Notification
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <InboxIcon />
                </template>
                <template v-slot:name>
                    Bookmarks
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <BookmarkIcon />
                </template>
                <template v-slot:name>
                    Messages
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <DocumentTextIcon />
                </template>
                <template v-slot:name>
                    Lists
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <UserIcon />
                </template>
                <template v-slot:name>
                    Profile
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <EllipsisHorizontalCircleIcon />
                </template>
                <template v-slot:name>
                    More
                </template>
            </SidebarLeftTab>
            <div class="hidden xl:block">
                <UiButton liquid size="lg">
                    <span class="font-bold">
                        Tweet
                    </span>
                </UiButton>
            </div>
            <div class="block xl:hidden">
                <UiButton>
                    <div class="w-6 h-6 font-bold">
                        <PencilSquareIcon />
                    </div>
                </UiButton>
            </div>
        </div>
    </div>
</template>
<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid";
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, EllipsisHorizontalCircleIcon, PencilSquareIcon } from "@heroicons/vue/24/outline"

const { defaultTransition } = useTailwindConfig();

</script>