// transaction store with pinia
import { defineStore } from 'pinia'
import axiosInstance from '@/boot/axios'
import notify from '@/boot/notify'

export const useTransactionStore = defineStore({
  id: 'transaction',
  state: () => ({
    data: [],
    dataDetail: {},
    dataOrder: [],
    dialogImage: false,
    idActive: null,
  }),
  actions: {
    async getAll() {
      try {
        const response = await axiosInstance.get('/transaction')
        if (response.data.status) {
          this.data = response.data.data.map((transaction, index) => ({
            ...transaction,
            no: index + 1
          }))
          console.log('this.data', this.data);
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // get transaction by id user
    async getByIdUser(id) {
      try {
        const response = await axiosInstance.get(`/transaction/${id}`)
        if (response.data.status) {
          this.dataOrder = response.data.data
        }
      } catch (error) {
        console.error('error', error);
      }
    },

    // create transaction
    async create(payload) {
      try {
        const response = await axiosInstance.post('/transaction/snap-token', payload)
        console.log('response', response);
        if (response.data.status) {
          notify.success(response.data.message)
          const snapToken = response.data.data.token
          window.snap.pay(snapToken, {
            onSuccess: function (result) {
              console.log('success', result);
              notify.success('Transaction Success')

            },
            onPending: function (result) {
              console.log('pending', result);
              notify.warning('Transaction Pending')
            },
            onError: function (result) {
              console.log('error', result);
              notify.error('Transaction Error')
            },
            onClose: function () {
              console.log('close');
            }
          })
        }
        // const response = await axiosInstance.post('/transaction', payload)
        // if (response.data.status) {
        //   notify.success(response.data.message)
        //   // this.snapToken()
        // }
      } catch (error) {
        console.error('error', error);
      }
    },

    // // snap token payment
    // async snapToken(payload) {
    //   try {
    //     const response = await axiosInstance.post('/transaction/snap-token', payload)
    //     if (response.data.status) {
    //       const snapToken = response.data.data.token
    //       window.snap.pay(snapToken, {
    //         onSuccess: function (result) {
    //           console.log('success', result);
    //           notify.success('Transaction Success')
    //         },
    //         onPending: function (result) {
    //           console.log('pending', result);
    //           notify.warning('Transaction Pending')
    //         },
    //         onError: function (result) {
    //           console.log('error', result);
    //           notify.error('Transaction Error')
    //         },
    //         onClose: function () {
    //           console.log('close');
    //         }
    //       })
    //     }
    //   } catch (error) {
    //     console.error('error', error);
    //   }
    // },

    // update transaction
    async update(payload) {
      try {
        await axiosInstance.put(`/transaction/${payload.id}`, payload)
      } catch (error) {
        console.error('error', error);
      }
    },
  }
})
