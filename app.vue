<template>
    <div :class="{ 'dark': darkMode }">
        <div class="bg-white dark:bg-dim-900">
            <LoadingPage v-if="isAuthLoading" />
            <div v-else-if="user" class="min-h-full">
                <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
                    <!-- Left sidebar -->
                    <div class="hidden md:block xs:col-span-1 xl:col-span-2">
                        <div class="sticky top-0">
                            <SidebarLeft @on-tweet="handleOpenTweetModal" />
                        </div>
                    </div>
                    <!-- Main content -->
                    <main class="col-span-12 md:col-8 xl:col-span-6">
                        <router-view />
                    </main>
                    <!-- Right sidebar -->
                    <div class="hidden md:block xl:col-span-4 md:col-span-3">
                        <div class="sticky top-0">
                            <SidebarRight />
                        </div>
                    </div>
                </div>
            </div>
            <AuthPage v-else />

            <UIModal :isOpen="postTweetModal" @onClose="handleModalClose">
                <TweetForm :replyTo="replyTweet" showReply :user="user" @onSuccess="handleFormSuccess" />
            </UIModal>
        </div>
    </div>
</template>

<script setup>
import LoadingPage from "~/components/LoadingPage.vue";
import useEmitter from "~/composables/useEmitter.js";

const darkMode = ref(false)

const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();
const { closePostTweetModal, usePostTweetModal, openPostTweetModal, useReplyTweet } = useTweets();
const postTweetModal = usePostTweetModal()
const emmiter = useEmitter();
const replyTweet = useReplyTweet();

emmiter.$on('replyTweet', (tweet) => {
    openPostTweetModal(tweet)
})

onBeforeMount(() => {
    initAuth()
})

function handleFormSuccess(tweet) {
    closePostTweetModal()
    navigateTo({
        path: `/status/${tweet.id}`
    })
}

function handleModalClose() {
    closePostTweetModal()
}

function handleOpenTweetModal() {
    openPostTweetModal(null)
}
</script>