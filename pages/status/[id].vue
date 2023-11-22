<template>
    <div>
        <MainSection title="Tweet" :loading="loading">
            <Head>
                <Title></Title>
            </Head>
        </MainSection>
    </div>
</template>

<script setup>
import useTweets from "~/composables/useTweets.js";

const loading = ref(false);
const tweet = ref(null)
const {getTweetById} = useTweets()

function getTweetIdFromRoute() {
    return useRoute().params.id
}

async function getTweet() {
    loading.value = true;
    try {
        const response = await getTweetById(getTweetIdFromRoute())
        tweet.value = response.tweet
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
}

onBeforeMount(() => {
    getTweet()
})


</script>