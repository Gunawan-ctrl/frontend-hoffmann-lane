// userstore with pinia
import { defineStore } from 'pinia'
import axiosInstance from '@/boot/axios'
import notify from '@/boot/notify'
import router from '@/router'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    data: [],
    dataDetail: {},
    openDialog: false,
    idActive: null,
    btnLoading: false
  }),
  actions: {
    async login(form) {
      try {
        const response = await axiosInstance.post('/user/login', form)
        if (response.data?.data?.role === 1) {
          localStorage.setItem('dataUser', JSON.stringify(response.data.data))
          notify.success(response.data.message)
          await new Promise((resolve) => setTimeout(resolve, 1000))
          router.push({ name: 'dashboard' })
        } else {
          notify.error(response.data.message)
        }
      } catch (error) {
        notify.commonError(), console.log('error', error);
      }
    },

    // register
    async register(form) {
      this.btnLoading = true
      try {
        const response = await axiosInstance.post('/user/register', form)
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
        const response = await axiosInstance.get('/user')
        if (response.data.status) {
          this.data = response.data.data.map((user, index) => ({
            ...user,
            no: index + 1
          }))
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // get user by id
    async getById(id) {
      try {
        const response = await axiosInstance.get(`/user/${id}`)
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
        const response = await axiosInstance.put(`/user/${id}`, form)
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
        const response = await axiosInstance.delete(`/user/${id}`)
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
