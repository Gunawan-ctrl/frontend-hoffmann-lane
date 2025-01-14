// userstore with pinia
import { defineStore } from 'pinia'
import axiosInstance from '@/boot/axios'
import notify from '@/boot/notify'
import router from '@/router'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    data: [],
    customer: [],
    dataDetail: {},
    openDialog: false,
    idActive: null,
    btnLoading: false
  }),
  actions: {
    async login(form) {
      try {
        const response = await axiosInstance.post('/users/login', form)
        localStorage.setItem('dataUser', JSON.stringify(response.data.data))
        if (response.data?.data?.role === 1) {
          notify.success(response.data.message)
          await new Promise((resolve) => setTimeout(resolve, 1000))
          router.push({ name: 'dashboard' })
        } else {
          notify.success(response.data.message)
          router.push({ name: 'home' })
          // await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      } catch (error) {
        notify.commonError(), console.log('error', error);
      }
    },

    // register
    async register(form) {
      this.btnLoading = true
      try {
        const response = await axiosInstance.post('/users/register', form)
        if (response.data.status) {
          notify.success(response.data.message)
          this.getAll()

        }
      } catch (error) {
        notify.commonError(), console.error('error', error);
      } finally {
        this.btnLoading = false
      }
    },

    // get user
    async getAll() {
      try {
        const response = await axiosInstance.get('/users')
        if (response.data.status) {
          this.data = response.data.data.map((user, index) => ({
            ...user,
            no: index + 1
          }))
          this.customer = response.data.data.filter((user) => user.role === 2)
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // get user by id
    async getById(id) {
      try {
        const response = await axiosInstance.get(`/users/${id}`)
        if (response.data.status) {
          this.dataDetail = response.data.data
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // update user
    async update(id, form) {
      try {
        const response = await axiosInstance.put(`/users/${id}`, form)
        if (response.data.status) {
          notify.success(response.data.message)
          router.push({ name: 'administrator' })
          this.getAll()
        }
      } catch (error) {
        notify.commonError(), console.log('error', error);
      }
    },

    // delete user
    async deleteOne(id) {
      this.btnLoading = true
      try {
        const response = await axiosInstance.delete(`/users/${id}`)
        if (response.data.status) {
          notify.success(response.data.message)
          this.getAll()
          this.resetDialog()
        }
      } catch (error) {
        notify.commonError(), console.log('error', error);
      } finally {
        this.btnLoading = false
      }
    },

    // reset dialog
    resetDialog() {
      this.openDialog = false
      this.idActive = null

    }
  }
})
