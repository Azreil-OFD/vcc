<template>
  <div>
    <div>isTelegramUser: {{ isTelegramUser }}</div>
    <div v-if="isTelegramUser">
      <div>
        Привет обычный юзер. Твои данные:
        <!-- <pre>{{ user }}</pre> -->
        <h1>Привет, {{ user.first_name }}!</h1>
        <p>Ваше имя: {{ user.first_name }} {{ user.last_name }}</p>
        <p>Ваш ID: {{ user.id }}, ник: {{ user.username }}</p>
      </div>
      <UButton @click="sendActionToBot">Нажми меня</UButton>
    </div>
    <div v-else>
      <UButton>Вы не в телеграме, увы 1</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { TelegramUser } from '~/types/tg';
const { useWebApp } = await import('vue-tg')


const isTelegramUser = ref(false)
const loaded = ref(false)
const user: TelegramUser = ref({});

const sendActionToBot = () => {
  if (!window.Telegram) return
  // Отправляем данные в Telegram бота
  useWebApp().sendData(JSON.stringify({ action: 'button_clicked' }));
};

// Инициализация Web App Telegram
onMounted(() => {
  const { initData, initDataUnsafe, ready } = window.Telegram.WebApp;
  ready();
  user.value = initDataUnsafe?.user;
  isTelegramUser.value = user.value?.id != undefined
});
</script>