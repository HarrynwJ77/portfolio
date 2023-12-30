<script setup lang="ts">
import hImage from './hImage.vue';
import { getImageUrl } from '@/services/hImageGetUrl';

const links = ([
                    {title: "LinkedIn", image: "LinkedIn.svg", src: "https://www.linkedin.com/in/harry-jones-35b511239/", active: true},
                    {title: "Email", image: "email.svg", src: "mailto:harrynwjones@gmail.com", active: true},
                    {title: "Mobile", image: "mobile.svg", src: "+44 77344 70165", active: true},
                    {title: "GitHub", image: "github.svg", src: "https://github.com/HarrynwJ77", active: true}
                    ]);

function isActive(status:boolean) {
    return status.valueOf;
}

</script>
<template>
    <div class="container">
      <div class="left-column">
        <div class="top-row">
          <div class="top-left-column">
            <div class="top-left-column-top">
                <img :src="getImageUrl('profileImage.jpg')">
            </div>
            <div class="top-left-column-bottom">
                <div class="h-link-container">
                    <div class="h-link-icon-container">
                        <img class="h-link-icon" v-for="link in links" v-bind:key="link.title" :src="getImageUrl(link.image)">
                    </div>
                    <p class="link-desc">Contact Information</p>
                    <a class="link-title" v-for="link in links" v-bind:key="link.title" :href="link.src" v-if="false">{{ link.title }}</a>
                </div>
            </div>
          </div>
          <div class="top-right-column"></div>
        </div>
        <div class="bottom-row"></div>
      </div>
      <div class="right-column"></div>
    </div>
  </template>
  
<style scoped>

.link-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    text-decoration: none;
    font-weight: bold;

}


.h-link-icon-container {
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.h-link-icon {
    padding: 5px;
    display: inline-table;
    max-width: 40px;
    max-height: 40px;
    width: 35px;
    height: 35px;
    margin:auto;
    transition: all .3s ease-in-out;
}

.h-link-icon:hover .link-desc {
    margin-top: 0px;
    text-decoration-color: green;
    transition: all .3s ease-in-out;
}

.h-link-icon:hover{
    padding: 0px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    margin: auto;
    width: 40px;
    height: 40px;
}

.link-desc {
    text-align:center;
    font-weight: bold;
    transition: all .3s ease-in-out;
}

.top-left-column-top>img {
    border-radius: 45%;
    border-width: 5px;
    border-style: solid;
    border-color: #B4D4FF;
    max-width: 85%;
    max-height: 85%;
    display:flex;
    margin: auto;
}

  div {
    border-style: solid;
    border-color: black;
    border-width: 0px;
  }
    .container {
      display: flex;
      height: 100vh;
    }
  
    .left-column {
      flex: 0 0 38.2%;
      display: flex;
      flex-direction: column;
    }
  
    .top-row {
      flex: 0 0 38.2%;
      display: flex;
    }
  
    .top-left-column {
      flex: 0 0 38.2%;
      display: flex;
      flex-direction: column;
    }



    .top-left-column-bottom {
      flex: 0 0 38.2%;
      background-color: #86B6F6; 
    }

    .top-left-column-top {
      flex: 0 0 61.8%;
      background-color: #86B6F6; 
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
  
    .top-right-column {
      flex: 0 0 61.8%;
      background-color: #B4D4FF; 
    }
  
    .bottom-row {
      flex: 0 0 61.8%;
      background-color: #B4D4FF; 
    }
  
    .right-column {
      flex: 0 0 61.8%;
      background-color: #EEF5FF; 
    }
  </style>