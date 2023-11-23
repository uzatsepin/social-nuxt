export default () => {
    const usePostTweetModal = () => useState('post_tweet_modal', () => false);
    const useReplyTweet = () => useState('reply_tweet', () => null)

    const setReplyTo = (tweet) => {
        const replyTweet = useReplyTweet()
        replyTweet.value = tweet
    }

    const closePostTweetModal = () => {
        const postTweetModal = usePostTweetModal();
        postTweetModal.value = false;
    }
    const openPostTweetModal = (tweet = null) => {
        const postTweetModal = usePostTweetModal();
        postTweetModal.value = true;
        setReplyTo(tweet)
    }


    const postTweet = (formData) => {
        const form = new FormData();

        form.append('text', formData.text)
        if (formData.replyTo) {
            form.append('replyTo', formData.replyTo)
        }
        formData.mediaFiles.forEach((mediaFile, index) => {
            form.append('media_file_' + index, mediaFile)
        })

        return useFetchApi('/api/user/tweets', {
            method: "POST",
            body: form
        })
    }

    const getHomeTweets = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useFetchApi('/api/tweets', {
                    method: 'GET'
                })
                resolve(response)
            } catch(error) {
                reject(error)
            }
        })
    }

    const getTweetById = (tweetId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useFetchApi(`/api/tweets/${tweetId}`)

                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }


    return {
        postTweet,
        getHomeTweets,
        getTweetById,
        closePostTweetModal,
        usePostTweetModal,
        openPostTweetModal,
        useReplyTweet
    }
}