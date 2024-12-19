// category store with pinia
import { defineStore } from 'pinia'
import axiosInstance from '@/boot/axios'
import router from '@/router'
import notify from '@/boot/notify'

export const useCategoryStore = defineStore({
  id: 'category',
  state: () => ({
    data: [],
    dataDetail: {},
    option: [],
    loading: false
  }),
  actions: {
    async getAll() {
      this.loading = true
      try {
        const response = await axiosInstance.get('/category')
        if (response.data.status) {
          this.option = response.data.data
          this.data = this.option.map((category, index) => ({
            ...category,
            no: index + 1
          }))
        }
      } catch (error) {
        console.error('error', error);
      } finally {
        this.loading = false
      }
    },

    // get category by id
    async getById(id) {
      try {
        const response = await axiosInstance.get(`/category/${id}`)
        if (response.data.status) {
          this.dataDetail = response.data.data
          console.log('this.dataDetail', this.dataDetail);
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // create new category
    async create(payload) {
      try {
        const response = await axiosInstance.post('/category', payload)
        if (response.data.status) {
          notify.success(response.data.message)
          this.getAll()
          router.push({ name: 'category' })
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // update category
    async update(id, payload) {
      try {
        const response = await axiosInstance.put(`/category/${id}`, payload)
        if (response.data.status) {
          notify.success(response.data.message)
          this.getAll()
          router.push({ name: 'category' })
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // delete category
    async delete(id) {
      try {
        const response = await axiosInstance.delete(`/category/${id}`)
        if (response.data.status) {
          notify.success(response.data.message)
          this.getAll()
        }
      } catch (error) {
        console.error('error', error);
      }
    }
  }
})

