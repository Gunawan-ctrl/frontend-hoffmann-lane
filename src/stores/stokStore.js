// stok store with pinia
import { defineStore } from 'pinia'
import axiosInstance from '@/boot/axios'
import router from '@/router'
import notify from '@/boot/notify'

export const useStokStore = defineStore({
  id: 'stok',
  state: () => ({
    data: [],
    dataDetail: {},
    loading: false,
    btnLoading: false,
    openDialog: false,
    idActive: null
  }),
  actions: {
    async getAll() {
      this.loading = true
      try {
        const response = await axiosInstance.get('/stok')
        if (response.data.status) {
          this.data = response.data.data.map((stok, index) => ({
            ...stok,
            no: index + 1
          }))
        }
      } catch (error) {
        console.error('error', error);
      } finally {
        this.loading = false
      }
    },

    // get stok by id
    async getById(id) {
      try {
        const response = await axiosInstance.get(`/stok/${id}`)
        if (response.data.status) {
          this.dataDetail = response.data.data
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // create new stok
    async create(payload) {
      try {
        const response = await axiosInstance.post('/stok', payload)
        if (response.data.status) {
          notify.success(response.data.message)
          this.getAll()
          router.push({ name: 'inventory' })
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // update stok
    async update(id, payload) {
      try {
        const response = await axiosInstance.put(`/stok/${id}`, payload)
        if (response.data.status) {
          notify.success(response.data.message)
          this.getAll()
          router.push({ name: 'inventory' })
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // delete stok
    async delete() {
      console.log('id');
      try {
        const response = await axiosInstance.delete(`/stok/${this.idActive}`)
        if (response.data.status) {
          notify.success(response.data.message)
          this.getAll()
          this.resetDialog()
        }
        console.log('response', response);
      } catch (error) {
        console.error('error', error);
      }
    },

    resetDialog() {
      this.openDialog = false
      this.idActive = null

    }
  }
})
