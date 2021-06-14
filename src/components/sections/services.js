import React from 'react';
import styled from 'styled-components';
//* Local imports
import Icons from '../../svgs/location.svg';

const listData = [
  {
    icon: (
      <svg viewBox="0 0 464.02688 464.02688" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m375.960938 50.144531c-1.050782 179.507813-146.308594 324.765625-325.816407 325.816407 55.410157 70.0625 146.128907 102.078124 233.238281 82.320312 87.113282-19.761719 155.136719-87.785156 174.898438-174.898438 19.757812-87.109374-12.257812-177.828124-82.320312-233.238281zm0 0"
          fill="#83d8f4"
        />
        <path
          d="m375.960938 50.144531c-92.300782-73.132812-224.761719-65.484375-308.03125 17.785157-83.269532 83.269531-90.917969 215.730468-17.785157 308.03125 179.507813-1.050782 324.765625-146.308594 325.816407-325.816407zm0 0"
          fill="#91dcf5"
        />
        <path
          d="m344.015625 96.015625c-17.679687 8-27.4375-1.4375-40 8-15.519531 11.679687-21.757813 41.921875-8 64 9.738281 15.554687 27.199219 19.457031 46.914063 23.761719 19.953124-40.933594 31.125-85.582032 32.800781-131.089844-5.816407 15.308594-17.121094 27.902344-31.714844 35.328125zm0 0"
          fill="#0b7"
        />
        <path
          d="m378.488281 52.128906c-.722656 2.917969-1.65625 5.777344-2.792969 8.558594-1.671874 45.507812-12.847656 90.15625-32.796874 131.089844l1.117187.238281c27.441406 6 38.082031-6.71875 64 0 11.5625 3.316406 22.410156 8.742187 32 16 11.113281 9.167969 19.328125 21.367187 23.640625 35.113281.175781-3.6875.359375-7.375.359375-11.113281.0625-69.789063-31.363281-135.878906-85.527344-179.886719zm0 0"
          fill="#00a468"
        />
        <path
          d="m224.015625 328.015625c15.839844 17.519531 20 47.121094 8 64-9.757813 13.761719-23.117187 9.039063-32 24-6.71875 12.488281-6.71875 27.515625 0 40 1.234375 2.257813 2.707031 4.371094 4.394531 6.3125 9.160156 1.105469 18.378906 1.667969 27.605469 1.6875 84.601563.023437 162.5-46.023437 203.273437-120.152344-14.550781-9.734375-37.28125-22.613281-59.273437-23.847656-22.539063-2.203125-45.148437 3.449219-64 16-23.597656 17.28125-28.238281 41.761719-40 40-8.320313-1.199219-12.878906-14.640625-16-24-7.144531-21.3125-3.269531-35.734375-3.335937-47.6875-9.769532 7.816406-19.976563 15.066406-30.574219 21.710937.824219.808594 1.503906 1.523438 1.910156 1.976563zm0 0"
          fill="#00a468"
        />
        <path
          d="m248.015625 288.015625c-8.238281-11.519531-23.597656-13.679687-40-16-34.398437-4.800781-47.917969 10-64 0-13.105469-8.726563-19.472656-24.636719-16-40 6.722656-20.078125 36.082031-13.277344 72-40 11.601563-8.558594 39.199219-29.117187 40-56 .800781-26.320313-24.878906-33.839844-32-64-3.09375-12.992187 2.679687-42.871094 17.3125-71.757813-86.121094 2.433594-163.792969 52.40625-201.710937 129.765626v.074218c-5.132813 28.421875-4.996094 57.546875.398437 85.917969 4.882813 32.242187 9.359375 61.519531 32 88 9.921875 11.679687 25.199219 29.441406 48 32 25.28125 2.800781 58.640625-13.359375 64-16 7.167969-4.707031 15.441406-7.464844 24-8 11.4375.730469 22.179687 5.734375 30.089844 14.023437 10.597656-6.644531 20.804687-13.894531 30.574219-21.710937.269531-5.800781-1.367188-11.53125-4.664063-16.3125zm0 0"
          fill="#0b7"
        />
        <path
          d="m168.015625 64.015625c0 35.359375-64 120-64 120s-39.917969-52.800781-56.71875-92.398437c-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ff5023"
        />
        <path
          d="m128.015625 56.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
        <path
          d="m408.015625 280.015625c-1.757813 15.003906-6.636719 29.472656-14.320313 42.480469-14.679687 26.996094-31.28125 52.902344-49.679687 77.519531 0 0-20.960937-27.757813-38.960937-58.160156-6.632813-11.027344-12.566407-22.464844-17.757813-34.238281-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ffcd00"
        />
        <path
          d="m368.015625 272.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
      </svg>
    ),
    title: 'Leadership',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    icon: (
      <svg viewBox="0 0 464.02688 464.02688" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m375.960938 50.144531c-1.050782 179.507813-146.308594 324.765625-325.816407 325.816407 55.410157 70.0625 146.128907 102.078124 233.238281 82.320312 87.113282-19.761719 155.136719-87.785156 174.898438-174.898438 19.757812-87.109374-12.257812-177.828124-82.320312-233.238281zm0 0"
          fill="#83d8f4"
        />
        <path
          d="m375.960938 50.144531c-92.300782-73.132812-224.761719-65.484375-308.03125 17.785157-83.269532 83.269531-90.917969 215.730468-17.785157 308.03125 179.507813-1.050782 324.765625-146.308594 325.816407-325.816407zm0 0"
          fill="#91dcf5"
        />
        <path
          d="m344.015625 96.015625c-17.679687 8-27.4375-1.4375-40 8-15.519531 11.679687-21.757813 41.921875-8 64 9.738281 15.554687 27.199219 19.457031 46.914063 23.761719 19.953124-40.933594 31.125-85.582032 32.800781-131.089844-5.816407 15.308594-17.121094 27.902344-31.714844 35.328125zm0 0"
          fill="#0b7"
        />
        <path
          d="m378.488281 52.128906c-.722656 2.917969-1.65625 5.777344-2.792969 8.558594-1.671874 45.507812-12.847656 90.15625-32.796874 131.089844l1.117187.238281c27.441406 6 38.082031-6.71875 64 0 11.5625 3.316406 22.410156 8.742187 32 16 11.113281 9.167969 19.328125 21.367187 23.640625 35.113281.175781-3.6875.359375-7.375.359375-11.113281.0625-69.789063-31.363281-135.878906-85.527344-179.886719zm0 0"
          fill="#00a468"
        />
        <path
          d="m224.015625 328.015625c15.839844 17.519531 20 47.121094 8 64-9.757813 13.761719-23.117187 9.039063-32 24-6.71875 12.488281-6.71875 27.515625 0 40 1.234375 2.257813 2.707031 4.371094 4.394531 6.3125 9.160156 1.105469 18.378906 1.667969 27.605469 1.6875 84.601563.023437 162.5-46.023437 203.273437-120.152344-14.550781-9.734375-37.28125-22.613281-59.273437-23.847656-22.539063-2.203125-45.148437 3.449219-64 16-23.597656 17.28125-28.238281 41.761719-40 40-8.320313-1.199219-12.878906-14.640625-16-24-7.144531-21.3125-3.269531-35.734375-3.335937-47.6875-9.769532 7.816406-19.976563 15.066406-30.574219 21.710937.824219.808594 1.503906 1.523438 1.910156 1.976563zm0 0"
          fill="#00a468"
        />
        <path
          d="m248.015625 288.015625c-8.238281-11.519531-23.597656-13.679687-40-16-34.398437-4.800781-47.917969 10-64 0-13.105469-8.726563-19.472656-24.636719-16-40 6.722656-20.078125 36.082031-13.277344 72-40 11.601563-8.558594 39.199219-29.117187 40-56 .800781-26.320313-24.878906-33.839844-32-64-3.09375-12.992187 2.679687-42.871094 17.3125-71.757813-86.121094 2.433594-163.792969 52.40625-201.710937 129.765626v.074218c-5.132813 28.421875-4.996094 57.546875.398437 85.917969 4.882813 32.242187 9.359375 61.519531 32 88 9.921875 11.679687 25.199219 29.441406 48 32 25.28125 2.800781 58.640625-13.359375 64-16 7.167969-4.707031 15.441406-7.464844 24-8 11.4375.730469 22.179687 5.734375 30.089844 14.023437 10.597656-6.644531 20.804687-13.894531 30.574219-21.710937.269531-5.800781-1.367188-11.53125-4.664063-16.3125zm0 0"
          fill="#0b7"
        />
        <path
          d="m168.015625 64.015625c0 35.359375-64 120-64 120s-39.917969-52.800781-56.71875-92.398437c-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ff5023"
        />
        <path
          d="m128.015625 56.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
        <path
          d="m408.015625 280.015625c-1.757813 15.003906-6.636719 29.472656-14.320313 42.480469-14.679687 26.996094-31.28125 52.902344-49.679687 77.519531 0 0-20.960937-27.757813-38.960937-58.160156-6.632813-11.027344-12.566407-22.464844-17.757813-34.238281-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ffcd00"
        />
        <path
          d="m368.015625 272.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
      </svg>
    ),
    title: 'Communications',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    icon: (
      <svg viewBox="0 0 464.02688 464.02688" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m375.960938 50.144531c-1.050782 179.507813-146.308594 324.765625-325.816407 325.816407 55.410157 70.0625 146.128907 102.078124 233.238281 82.320312 87.113282-19.761719 155.136719-87.785156 174.898438-174.898438 19.757812-87.109374-12.257812-177.828124-82.320312-233.238281zm0 0"
          fill="#83d8f4"
        />
        <path
          d="m375.960938 50.144531c-92.300782-73.132812-224.761719-65.484375-308.03125 17.785157-83.269532 83.269531-90.917969 215.730468-17.785157 308.03125 179.507813-1.050782 324.765625-146.308594 325.816407-325.816407zm0 0"
          fill="#91dcf5"
        />
        <path
          d="m344.015625 96.015625c-17.679687 8-27.4375-1.4375-40 8-15.519531 11.679687-21.757813 41.921875-8 64 9.738281 15.554687 27.199219 19.457031 46.914063 23.761719 19.953124-40.933594 31.125-85.582032 32.800781-131.089844-5.816407 15.308594-17.121094 27.902344-31.714844 35.328125zm0 0"
          fill="#0b7"
        />
        <path
          d="m378.488281 52.128906c-.722656 2.917969-1.65625 5.777344-2.792969 8.558594-1.671874 45.507812-12.847656 90.15625-32.796874 131.089844l1.117187.238281c27.441406 6 38.082031-6.71875 64 0 11.5625 3.316406 22.410156 8.742187 32 16 11.113281 9.167969 19.328125 21.367187 23.640625 35.113281.175781-3.6875.359375-7.375.359375-11.113281.0625-69.789063-31.363281-135.878906-85.527344-179.886719zm0 0"
          fill="#00a468"
        />
        <path
          d="m224.015625 328.015625c15.839844 17.519531 20 47.121094 8 64-9.757813 13.761719-23.117187 9.039063-32 24-6.71875 12.488281-6.71875 27.515625 0 40 1.234375 2.257813 2.707031 4.371094 4.394531 6.3125 9.160156 1.105469 18.378906 1.667969 27.605469 1.6875 84.601563.023437 162.5-46.023437 203.273437-120.152344-14.550781-9.734375-37.28125-22.613281-59.273437-23.847656-22.539063-2.203125-45.148437 3.449219-64 16-23.597656 17.28125-28.238281 41.761719-40 40-8.320313-1.199219-12.878906-14.640625-16-24-7.144531-21.3125-3.269531-35.734375-3.335937-47.6875-9.769532 7.816406-19.976563 15.066406-30.574219 21.710937.824219.808594 1.503906 1.523438 1.910156 1.976563zm0 0"
          fill="#00a468"
        />
        <path
          d="m248.015625 288.015625c-8.238281-11.519531-23.597656-13.679687-40-16-34.398437-4.800781-47.917969 10-64 0-13.105469-8.726563-19.472656-24.636719-16-40 6.722656-20.078125 36.082031-13.277344 72-40 11.601563-8.558594 39.199219-29.117187 40-56 .800781-26.320313-24.878906-33.839844-32-64-3.09375-12.992187 2.679687-42.871094 17.3125-71.757813-86.121094 2.433594-163.792969 52.40625-201.710937 129.765626v.074218c-5.132813 28.421875-4.996094 57.546875.398437 85.917969 4.882813 32.242187 9.359375 61.519531 32 88 9.921875 11.679687 25.199219 29.441406 48 32 25.28125 2.800781 58.640625-13.359375 64-16 7.167969-4.707031 15.441406-7.464844 24-8 11.4375.730469 22.179687 5.734375 30.089844 14.023437 10.597656-6.644531 20.804687-13.894531 30.574219-21.710937.269531-5.800781-1.367188-11.53125-4.664063-16.3125zm0 0"
          fill="#0b7"
        />
        <path
          d="m168.015625 64.015625c0 35.359375-64 120-64 120s-39.917969-52.800781-56.71875-92.398437c-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ff5023"
        />
        <path
          d="m128.015625 56.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
        <path
          d="m408.015625 280.015625c-1.757813 15.003906-6.636719 29.472656-14.320313 42.480469-14.679687 26.996094-31.28125 52.902344-49.679687 77.519531 0 0-20.960937-27.757813-38.960937-58.160156-6.632813-11.027344-12.566407-22.464844-17.757813-34.238281-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ffcd00"
        />
        <path
          d="m368.015625 272.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
      </svg>
    ),
    title: 'Architecture',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    icon: (
      <svg viewBox="0 0 464.02688 464.02688" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m375.960938 50.144531c-1.050782 179.507813-146.308594 324.765625-325.816407 325.816407 55.410157 70.0625 146.128907 102.078124 233.238281 82.320312 87.113282-19.761719 155.136719-87.785156 174.898438-174.898438 19.757812-87.109374-12.257812-177.828124-82.320312-233.238281zm0 0"
          fill="#83d8f4"
        />
        <path
          d="m375.960938 50.144531c-92.300782-73.132812-224.761719-65.484375-308.03125 17.785157-83.269532 83.269531-90.917969 215.730468-17.785157 308.03125 179.507813-1.050782 324.765625-146.308594 325.816407-325.816407zm0 0"
          fill="#91dcf5"
        />
        <path
          d="m344.015625 96.015625c-17.679687 8-27.4375-1.4375-40 8-15.519531 11.679687-21.757813 41.921875-8 64 9.738281 15.554687 27.199219 19.457031 46.914063 23.761719 19.953124-40.933594 31.125-85.582032 32.800781-131.089844-5.816407 15.308594-17.121094 27.902344-31.714844 35.328125zm0 0"
          fill="#0b7"
        />
        <path
          d="m378.488281 52.128906c-.722656 2.917969-1.65625 5.777344-2.792969 8.558594-1.671874 45.507812-12.847656 90.15625-32.796874 131.089844l1.117187.238281c27.441406 6 38.082031-6.71875 64 0 11.5625 3.316406 22.410156 8.742187 32 16 11.113281 9.167969 19.328125 21.367187 23.640625 35.113281.175781-3.6875.359375-7.375.359375-11.113281.0625-69.789063-31.363281-135.878906-85.527344-179.886719zm0 0"
          fill="#00a468"
        />
        <path
          d="m224.015625 328.015625c15.839844 17.519531 20 47.121094 8 64-9.757813 13.761719-23.117187 9.039063-32 24-6.71875 12.488281-6.71875 27.515625 0 40 1.234375 2.257813 2.707031 4.371094 4.394531 6.3125 9.160156 1.105469 18.378906 1.667969 27.605469 1.6875 84.601563.023437 162.5-46.023437 203.273437-120.152344-14.550781-9.734375-37.28125-22.613281-59.273437-23.847656-22.539063-2.203125-45.148437 3.449219-64 16-23.597656 17.28125-28.238281 41.761719-40 40-8.320313-1.199219-12.878906-14.640625-16-24-7.144531-21.3125-3.269531-35.734375-3.335937-47.6875-9.769532 7.816406-19.976563 15.066406-30.574219 21.710937.824219.808594 1.503906 1.523438 1.910156 1.976563zm0 0"
          fill="#00a468"
        />
        <path
          d="m248.015625 288.015625c-8.238281-11.519531-23.597656-13.679687-40-16-34.398437-4.800781-47.917969 10-64 0-13.105469-8.726563-19.472656-24.636719-16-40 6.722656-20.078125 36.082031-13.277344 72-40 11.601563-8.558594 39.199219-29.117187 40-56 .800781-26.320313-24.878906-33.839844-32-64-3.09375-12.992187 2.679687-42.871094 17.3125-71.757813-86.121094 2.433594-163.792969 52.40625-201.710937 129.765626v.074218c-5.132813 28.421875-4.996094 57.546875.398437 85.917969 4.882813 32.242187 9.359375 61.519531 32 88 9.921875 11.679687 25.199219 29.441406 48 32 25.28125 2.800781 58.640625-13.359375 64-16 7.167969-4.707031 15.441406-7.464844 24-8 11.4375.730469 22.179687 5.734375 30.089844 14.023437 10.597656-6.644531 20.804687-13.894531 30.574219-21.710937.269531-5.800781-1.367188-11.53125-4.664063-16.3125zm0 0"
          fill="#0b7"
        />
        <path
          d="m168.015625 64.015625c0 35.359375-64 120-64 120s-39.917969-52.800781-56.71875-92.398437c-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ff5023"
        />
        <path
          d="m128.015625 56.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
        <path
          d="m408.015625 280.015625c-1.757813 15.003906-6.636719 29.472656-14.320313 42.480469-14.679687 26.996094-31.28125 52.902344-49.679687 77.519531 0 0-20.960937-27.757813-38.960937-58.160156-6.632813-11.027344-12.566407-22.464844-17.757813-34.238281-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ffcd00"
        />
        <path
          d="m368.015625 272.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
      </svg>
    ),
    title: 'ERP',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    icon: (
      <svg viewBox="0 0 464.02688 464.02688" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m375.960938 50.144531c-1.050782 179.507813-146.308594 324.765625-325.816407 325.816407 55.410157 70.0625 146.128907 102.078124 233.238281 82.320312 87.113282-19.761719 155.136719-87.785156 174.898438-174.898438 19.757812-87.109374-12.257812-177.828124-82.320312-233.238281zm0 0"
          fill="#83d8f4"
        />
        <path
          d="m375.960938 50.144531c-92.300782-73.132812-224.761719-65.484375-308.03125 17.785157-83.269532 83.269531-90.917969 215.730468-17.785157 308.03125 179.507813-1.050782 324.765625-146.308594 325.816407-325.816407zm0 0"
          fill="#91dcf5"
        />
        <path
          d="m344.015625 96.015625c-17.679687 8-27.4375-1.4375-40 8-15.519531 11.679687-21.757813 41.921875-8 64 9.738281 15.554687 27.199219 19.457031 46.914063 23.761719 19.953124-40.933594 31.125-85.582032 32.800781-131.089844-5.816407 15.308594-17.121094 27.902344-31.714844 35.328125zm0 0"
          fill="#0b7"
        />
        <path
          d="m378.488281 52.128906c-.722656 2.917969-1.65625 5.777344-2.792969 8.558594-1.671874 45.507812-12.847656 90.15625-32.796874 131.089844l1.117187.238281c27.441406 6 38.082031-6.71875 64 0 11.5625 3.316406 22.410156 8.742187 32 16 11.113281 9.167969 19.328125 21.367187 23.640625 35.113281.175781-3.6875.359375-7.375.359375-11.113281.0625-69.789063-31.363281-135.878906-85.527344-179.886719zm0 0"
          fill="#00a468"
        />
        <path
          d="m224.015625 328.015625c15.839844 17.519531 20 47.121094 8 64-9.757813 13.761719-23.117187 9.039063-32 24-6.71875 12.488281-6.71875 27.515625 0 40 1.234375 2.257813 2.707031 4.371094 4.394531 6.3125 9.160156 1.105469 18.378906 1.667969 27.605469 1.6875 84.601563.023437 162.5-46.023437 203.273437-120.152344-14.550781-9.734375-37.28125-22.613281-59.273437-23.847656-22.539063-2.203125-45.148437 3.449219-64 16-23.597656 17.28125-28.238281 41.761719-40 40-8.320313-1.199219-12.878906-14.640625-16-24-7.144531-21.3125-3.269531-35.734375-3.335937-47.6875-9.769532 7.816406-19.976563 15.066406-30.574219 21.710937.824219.808594 1.503906 1.523438 1.910156 1.976563zm0 0"
          fill="#00a468"
        />
        <path
          d="m248.015625 288.015625c-8.238281-11.519531-23.597656-13.679687-40-16-34.398437-4.800781-47.917969 10-64 0-13.105469-8.726563-19.472656-24.636719-16-40 6.722656-20.078125 36.082031-13.277344 72-40 11.601563-8.558594 39.199219-29.117187 40-56 .800781-26.320313-24.878906-33.839844-32-64-3.09375-12.992187 2.679687-42.871094 17.3125-71.757813-86.121094 2.433594-163.792969 52.40625-201.710937 129.765626v.074218c-5.132813 28.421875-4.996094 57.546875.398437 85.917969 4.882813 32.242187 9.359375 61.519531 32 88 9.921875 11.679687 25.199219 29.441406 48 32 25.28125 2.800781 58.640625-13.359375 64-16 7.167969-4.707031 15.441406-7.464844 24-8 11.4375.730469 22.179687 5.734375 30.089844 14.023437 10.597656-6.644531 20.804687-13.894531 30.574219-21.710937.269531-5.800781-1.367188-11.53125-4.664063-16.3125zm0 0"
          fill="#0b7"
        />
        <path
          d="m168.015625 64.015625c0 35.359375-64 120-64 120s-39.917969-52.800781-56.71875-92.398437c-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ff5023"
        />
        <path
          d="m128.015625 56.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
        <path
          d="m408.015625 280.015625c-1.757813 15.003906-6.636719 29.472656-14.320313 42.480469-14.679687 26.996094-31.28125 52.902344-49.679687 77.519531 0 0-20.960937-27.757813-38.960937-58.160156-6.632813-11.027344-12.566407-22.464844-17.757813-34.238281-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ffcd00"
        />
        <path
          d="m368.015625 272.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
      </svg>
    ),
    title: 'BI, Data & Analytics',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    icon: (
      <svg viewBox="0 0 464.02688 464.02688" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m375.960938 50.144531c-1.050782 179.507813-146.308594 324.765625-325.816407 325.816407 55.410157 70.0625 146.128907 102.078124 233.238281 82.320312 87.113282-19.761719 155.136719-87.785156 174.898438-174.898438 19.757812-87.109374-12.257812-177.828124-82.320312-233.238281zm0 0"
          fill="#83d8f4"
        />
        <path
          d="m375.960938 50.144531c-92.300782-73.132812-224.761719-65.484375-308.03125 17.785157-83.269532 83.269531-90.917969 215.730468-17.785157 308.03125 179.507813-1.050782 324.765625-146.308594 325.816407-325.816407zm0 0"
          fill="#91dcf5"
        />
        <path
          d="m344.015625 96.015625c-17.679687 8-27.4375-1.4375-40 8-15.519531 11.679687-21.757813 41.921875-8 64 9.738281 15.554687 27.199219 19.457031 46.914063 23.761719 19.953124-40.933594 31.125-85.582032 32.800781-131.089844-5.816407 15.308594-17.121094 27.902344-31.714844 35.328125zm0 0"
          fill="#0b7"
        />
        <path
          d="m378.488281 52.128906c-.722656 2.917969-1.65625 5.777344-2.792969 8.558594-1.671874 45.507812-12.847656 90.15625-32.796874 131.089844l1.117187.238281c27.441406 6 38.082031-6.71875 64 0 11.5625 3.316406 22.410156 8.742187 32 16 11.113281 9.167969 19.328125 21.367187 23.640625 35.113281.175781-3.6875.359375-7.375.359375-11.113281.0625-69.789063-31.363281-135.878906-85.527344-179.886719zm0 0"
          fill="#00a468"
        />
        <path
          d="m224.015625 328.015625c15.839844 17.519531 20 47.121094 8 64-9.757813 13.761719-23.117187 9.039063-32 24-6.71875 12.488281-6.71875 27.515625 0 40 1.234375 2.257813 2.707031 4.371094 4.394531 6.3125 9.160156 1.105469 18.378906 1.667969 27.605469 1.6875 84.601563.023437 162.5-46.023437 203.273437-120.152344-14.550781-9.734375-37.28125-22.613281-59.273437-23.847656-22.539063-2.203125-45.148437 3.449219-64 16-23.597656 17.28125-28.238281 41.761719-40 40-8.320313-1.199219-12.878906-14.640625-16-24-7.144531-21.3125-3.269531-35.734375-3.335937-47.6875-9.769532 7.816406-19.976563 15.066406-30.574219 21.710937.824219.808594 1.503906 1.523438 1.910156 1.976563zm0 0"
          fill="#00a468"
        />
        <path
          d="m248.015625 288.015625c-8.238281-11.519531-23.597656-13.679687-40-16-34.398437-4.800781-47.917969 10-64 0-13.105469-8.726563-19.472656-24.636719-16-40 6.722656-20.078125 36.082031-13.277344 72-40 11.601563-8.558594 39.199219-29.117187 40-56 .800781-26.320313-24.878906-33.839844-32-64-3.09375-12.992187 2.679687-42.871094 17.3125-71.757813-86.121094 2.433594-163.792969 52.40625-201.710937 129.765626v.074218c-5.132813 28.421875-4.996094 57.546875.398437 85.917969 4.882813 32.242187 9.359375 61.519531 32 88 9.921875 11.679687 25.199219 29.441406 48 32 25.28125 2.800781 58.640625-13.359375 64-16 7.167969-4.707031 15.441406-7.464844 24-8 11.4375.730469 22.179687 5.734375 30.089844 14.023437 10.597656-6.644531 20.804687-13.894531 30.574219-21.710937.269531-5.800781-1.367188-11.53125-4.664063-16.3125zm0 0"
          fill="#0b7"
        />
        <path
          d="m168.015625 64.015625c0 35.359375-64 120-64 120s-39.917969-52.800781-56.71875-92.398437c-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ff5023"
        />
        <path
          d="m128.015625 56.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
        <path
          d="m408.015625 280.015625c-1.757813 15.003906-6.636719 29.472656-14.320313 42.480469-14.679687 26.996094-31.28125 52.902344-49.679687 77.519531 0 0-20.960937-27.757813-38.960937-58.160156-6.632813-11.027344-12.566407-22.464844-17.757813-34.238281-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ffcd00"
        />
        <path
          d="m368.015625 272.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
      </svg>
    ),
    title: 'Software Engineering & DevOps',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    icon: (
      <svg viewBox="0 0 464.02688 464.02688" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m375.960938 50.144531c-1.050782 179.507813-146.308594 324.765625-325.816407 325.816407 55.410157 70.0625 146.128907 102.078124 233.238281 82.320312 87.113282-19.761719 155.136719-87.785156 174.898438-174.898438 19.757812-87.109374-12.257812-177.828124-82.320312-233.238281zm0 0"
          fill="#83d8f4"
        />
        <path
          d="m375.960938 50.144531c-92.300782-73.132812-224.761719-65.484375-308.03125 17.785157-83.269532 83.269531-90.917969 215.730468-17.785157 308.03125 179.507813-1.050782 324.765625-146.308594 325.816407-325.816407zm0 0"
          fill="#91dcf5"
        />
        <path
          d="m344.015625 96.015625c-17.679687 8-27.4375-1.4375-40 8-15.519531 11.679687-21.757813 41.921875-8 64 9.738281 15.554687 27.199219 19.457031 46.914063 23.761719 19.953124-40.933594 31.125-85.582032 32.800781-131.089844-5.816407 15.308594-17.121094 27.902344-31.714844 35.328125zm0 0"
          fill="#0b7"
        />
        <path
          d="m378.488281 52.128906c-.722656 2.917969-1.65625 5.777344-2.792969 8.558594-1.671874 45.507812-12.847656 90.15625-32.796874 131.089844l1.117187.238281c27.441406 6 38.082031-6.71875 64 0 11.5625 3.316406 22.410156 8.742187 32 16 11.113281 9.167969 19.328125 21.367187 23.640625 35.113281.175781-3.6875.359375-7.375.359375-11.113281.0625-69.789063-31.363281-135.878906-85.527344-179.886719zm0 0"
          fill="#00a468"
        />
        <path
          d="m224.015625 328.015625c15.839844 17.519531 20 47.121094 8 64-9.757813 13.761719-23.117187 9.039063-32 24-6.71875 12.488281-6.71875 27.515625 0 40 1.234375 2.257813 2.707031 4.371094 4.394531 6.3125 9.160156 1.105469 18.378906 1.667969 27.605469 1.6875 84.601563.023437 162.5-46.023437 203.273437-120.152344-14.550781-9.734375-37.28125-22.613281-59.273437-23.847656-22.539063-2.203125-45.148437 3.449219-64 16-23.597656 17.28125-28.238281 41.761719-40 40-8.320313-1.199219-12.878906-14.640625-16-24-7.144531-21.3125-3.269531-35.734375-3.335937-47.6875-9.769532 7.816406-19.976563 15.066406-30.574219 21.710937.824219.808594 1.503906 1.523438 1.910156 1.976563zm0 0"
          fill="#00a468"
        />
        <path
          d="m248.015625 288.015625c-8.238281-11.519531-23.597656-13.679687-40-16-34.398437-4.800781-47.917969 10-64 0-13.105469-8.726563-19.472656-24.636719-16-40 6.722656-20.078125 36.082031-13.277344 72-40 11.601563-8.558594 39.199219-29.117187 40-56 .800781-26.320313-24.878906-33.839844-32-64-3.09375-12.992187 2.679687-42.871094 17.3125-71.757813-86.121094 2.433594-163.792969 52.40625-201.710937 129.765626v.074218c-5.132813 28.421875-4.996094 57.546875.398437 85.917969 4.882813 32.242187 9.359375 61.519531 32 88 9.921875 11.679687 25.199219 29.441406 48 32 25.28125 2.800781 58.640625-13.359375 64-16 7.167969-4.707031 15.441406-7.464844 24-8 11.4375.730469 22.179687 5.734375 30.089844 14.023437 10.597656-6.644531 20.804687-13.894531 30.574219-21.710937.269531-5.800781-1.367188-11.53125-4.664063-16.3125zm0 0"
          fill="#0b7"
        />
        <path
          d="m168.015625 64.015625c0 35.359375-64 120-64 120s-39.917969-52.800781-56.71875-92.398437c-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ff5023"
        />
        <path
          d="m128.015625 56.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
        <path
          d="m408.015625 280.015625c-1.757813 15.003906-6.636719 29.472656-14.320313 42.480469-14.679687 26.996094-31.28125 52.902344-49.679687 77.519531 0 0-20.960937-27.757813-38.960937-58.160156-6.632813-11.027344-12.566407-22.464844-17.757813-34.238281-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ffcd00"
        />
        <path
          d="m368.015625 272.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
      </svg>
    ),
    title: 'Infrastructure & Cloud Services',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    icon: (
      <svg viewBox="0 0 464.02688 464.02688" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m375.960938 50.144531c-1.050782 179.507813-146.308594 324.765625-325.816407 325.816407 55.410157 70.0625 146.128907 102.078124 233.238281 82.320312 87.113282-19.761719 155.136719-87.785156 174.898438-174.898438 19.757812-87.109374-12.257812-177.828124-82.320312-233.238281zm0 0"
          fill="#83d8f4"
        />
        <path
          d="m375.960938 50.144531c-92.300782-73.132812-224.761719-65.484375-308.03125 17.785157-83.269532 83.269531-90.917969 215.730468-17.785157 308.03125 179.507813-1.050782 324.765625-146.308594 325.816407-325.816407zm0 0"
          fill="#91dcf5"
        />
        <path
          d="m344.015625 96.015625c-17.679687 8-27.4375-1.4375-40 8-15.519531 11.679687-21.757813 41.921875-8 64 9.738281 15.554687 27.199219 19.457031 46.914063 23.761719 19.953124-40.933594 31.125-85.582032 32.800781-131.089844-5.816407 15.308594-17.121094 27.902344-31.714844 35.328125zm0 0"
          fill="#0b7"
        />
        <path
          d="m378.488281 52.128906c-.722656 2.917969-1.65625 5.777344-2.792969 8.558594-1.671874 45.507812-12.847656 90.15625-32.796874 131.089844l1.117187.238281c27.441406 6 38.082031-6.71875 64 0 11.5625 3.316406 22.410156 8.742187 32 16 11.113281 9.167969 19.328125 21.367187 23.640625 35.113281.175781-3.6875.359375-7.375.359375-11.113281.0625-69.789063-31.363281-135.878906-85.527344-179.886719zm0 0"
          fill="#00a468"
        />
        <path
          d="m224.015625 328.015625c15.839844 17.519531 20 47.121094 8 64-9.757813 13.761719-23.117187 9.039063-32 24-6.71875 12.488281-6.71875 27.515625 0 40 1.234375 2.257813 2.707031 4.371094 4.394531 6.3125 9.160156 1.105469 18.378906 1.667969 27.605469 1.6875 84.601563.023437 162.5-46.023437 203.273437-120.152344-14.550781-9.734375-37.28125-22.613281-59.273437-23.847656-22.539063-2.203125-45.148437 3.449219-64 16-23.597656 17.28125-28.238281 41.761719-40 40-8.320313-1.199219-12.878906-14.640625-16-24-7.144531-21.3125-3.269531-35.734375-3.335937-47.6875-9.769532 7.816406-19.976563 15.066406-30.574219 21.710937.824219.808594 1.503906 1.523438 1.910156 1.976563zm0 0"
          fill="#00a468"
        />
        <path
          d="m248.015625 288.015625c-8.238281-11.519531-23.597656-13.679687-40-16-34.398437-4.800781-47.917969 10-64 0-13.105469-8.726563-19.472656-24.636719-16-40 6.722656-20.078125 36.082031-13.277344 72-40 11.601563-8.558594 39.199219-29.117187 40-56 .800781-26.320313-24.878906-33.839844-32-64-3.09375-12.992187 2.679687-42.871094 17.3125-71.757813-86.121094 2.433594-163.792969 52.40625-201.710937 129.765626v.074218c-5.132813 28.421875-4.996094 57.546875.398437 85.917969 4.882813 32.242187 9.359375 61.519531 32 88 9.921875 11.679687 25.199219 29.441406 48 32 25.28125 2.800781 58.640625-13.359375 64-16 7.167969-4.707031 15.441406-7.464844 24-8 11.4375.730469 22.179687 5.734375 30.089844 14.023437 10.597656-6.644531 20.804687-13.894531 30.574219-21.710937.269531-5.800781-1.367188-11.53125-4.664063-16.3125zm0 0"
          fill="#0b7"
        />
        <path
          d="m168.015625 64.015625c0 35.359375-64 120-64 120s-39.917969-52.800781-56.71875-92.398437c-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ff5023"
        />
        <path
          d="m128.015625 56.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
        <path
          d="m408.015625 280.015625c-1.757813 15.003906-6.636719 29.472656-14.320313 42.480469-14.679687 26.996094-31.28125 52.902344-49.679687 77.519531 0 0-20.960937-27.757813-38.960937-58.160156-6.632813-11.027344-12.566407-22.464844-17.757813-34.238281-4.136719-8.664063-6.605469-18.027344-7.28125-27.601563 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0"
          fill="#ffcd00"
        />
        <path
          d="m368.015625 272.015625c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"
          fill="#f1f2f2"
        />
      </svg>
    ),
    title: 'Cybersecurity',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ad et deleniti!',
  },
];

const ServicesStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  background-color: var(--offWhite);
  @media only screen and (min-width: 1024px) {
    padding: 4rem 0;
  }
  .services {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    text-align: left;
    @media only screen and (min-width: 1024px) {
      width: 90%;
      text-align: center;
    }
    > h3,
    > p {
    }
    h6 {
    }
    h3 {
      font-size: 2.35rem;
      margin: 0.5rem 0;
    }
    p {
      /* margin-top: 0.5rem; */
    }
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);

      @media only screen and (min-width: 414px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        padding: 2rem 1rem;
      }
      @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media only screen and (min-width: 1280px) {
        grid-gap: 1.25rem;
        &:hover {
          .services__wrapper__box {
            opacity: 0.5;
          }
        }
      }
      &__box {
        cursor: pointer;
        background-color: var(--white);
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        margin-top: 2rem;
        text-align: center;
        border: none;
        padding: 1.5rem 1rem;
        will-change: opacity;
        transition: opacity 0.35s ease;

        &:hover,
        &:active {
          opacity: 1 !important;
        }

        @media only screen and (min-width: 414px) {
          margin-top: 0rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        @media only screen and (min-width: 1024px) {
          padding: 1rem 0.5rem;
        }
        @media only screen and (min-width: 1280px) {
          padding: 1.5rem 0.75rem;
        }
        svg {
          width: 45px;
        }

        h4 {
          font-size: 1.5rem;
          margin: 0.85rem 0 0.5rem 0;
          @media only screen and (min-width: 1280px) {
            font-size: 1.4rem;
          }
        }
        p {
          /* display: none; */
        }
        &:nth-child(1) {
          border-top: solid #923879 8px;
        }
        &:nth-child(2) {
          border-top: solid #48b481 8px;
        }
        &:nth-child(3) {
          border-top: solid var(--accent) 8px;
        }
        &:nth-child(4) {
          border-top: solid #923879 8px;
        }
        &:nth-child(5) {
          border-top: solid #48b481 8px;
        }
        &:nth-child(6) {
          border-top: solid var(--darkBlue) 8px;
        }
        &:nth-child(7) {
          border-top: solid var(--darkBlue) 8px;
        }
        &:nth-child(8) {
          border-top: solid var(--darkBlue) 8px;
        }
      }
    }
  }
`;
const Services = () => {
  const i = true;
  return (
    <ServicesStyles>
      <div className="services">
        <h6 className="sbt">Our services</h6>
        <h3>A title introducing our services</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
          mollitia!
        </p>
        <div className="services__wrapper">
          {listData.map((box) => (
            <div className="services__wrapper__box" key={box.title}>
              {box.icon}
              <h4>{box.title}</h4>
              <p>{box.text}</p>
            </div>
          ))}
        </div>
      </div>
    </ServicesStyles>
  );
};

export default Services;
