// menu store with pinia
import { defineStore } from 'pinia'
import axiosInstance from '@/boot/axios'
import notify from '@/boot/notify'
import router from '@/router'

export const useMenuStore = defineStore({
  id: 'menu',
  state: () => ({
    data: [],
    dataDetail: {},
    dataMenuByCategory: [],
    dialogImage: false,
    idActive: null,
  }),
  actions: {
    async getAll() {
      try {
        const response = await axiosInstance.get('/menu')
        if (response.data.status) {
          this.data = response.data.data.data.map((menu, index) => ({
            ...menu,
            no: index + 1
          }))
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // get menu by id
    async getById(id) {
      try {
        const response = await axiosInstance.get(`/menu/${id}`)
        if (response.data.status) {
          this.dataDetail = response.data.data
          console.log('this.dataDetail', this.dataDetail);
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // get menu by category
    async getByCategory(id) {
      try {
        const response = await axiosInstance.get(`/menu/category/${id}`)
        console.log('response', response);
        if (response.data.status) {
          this.dataMenuByCategory = response.data.data
          console.log('this.dataMenuByCategory', this.dataMenuByCategory);
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // create new menu
    async create(payload) {
      try {
        const response = await axiosInstance.post('/menu', payload, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        if (response.data.status) {
          notify.success(response.data.message)
          this.getAll()
          router.push({ name: 'ourmenu' })
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // update menu
    async update(id, payload) {
      console.log('id,payload', id, payload);
      try {
        const response = await axiosInstance.put(`/menu/${id}`, payload, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        if (response.data.status) {
          console.log('response', response);
          notify.success(response.data.message)
          this.getAll()
          router.push({ name: 'ourmenu' })
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // delete menu
    async delete(id) {
      try {
        const response = await axiosInstance.delete(`/menu/${id}`)
        if (response.data.status) {
          notify.success(response.data.message)
          this.getAll()
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // function to reset dialog image
    resetDialogImage() {
      this.dialogImage = false
    },
  }
})
