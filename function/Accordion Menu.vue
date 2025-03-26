<template>
  <div>
    <div v-for="menu in menuConfig" :data-testid="'first-level-' + menu.title.toLowerCase()">
      <div>
        <span>{{ menu.title }}</span>
        <button
          @click="handleExpend(menu)"
          v-if="menu.submenus"
          :data-testid="'button-' + menu.title.toLowerCase()"
        >
          {{ menu.expend ? "Hide" : "Expand" }}
        </button>
      </div>
      <ul v-if="menu.expend" :data-testid="'ul-' + menu.title.toLowerCase()">
        <li
          v-for="submenu in menu.subItems"
          :data-testid="'ul-' + menu.title.toLowerCase() + '-' + submenu.title.toLowerCase()"
        >
          {{ submenu }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menuConfig: {
      type: Array,
      required: true,
    },
  },
  methods: {
    init() {
      this.props.menuConfig.forEach((item) => {
        item.expend = false;
      });
    },
    handleExpend(menu) {
      if (menu.expend === true) {
        menu.expend = false;
      } else {
        this.props.menuConfig.forEach((item) => {
          item.expend = false;
        });
        menu.expend = true;
      }
    },
  },
};
</script>
