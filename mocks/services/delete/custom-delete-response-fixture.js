module.exports = {
  CUSTOM_DELETE_RESPONSE_OK: {
    message: 'El dato se ha actualizado correctamente.',
    error: {
      status: '',
      messageError: ''
    }
  },
  CUSTOM_DELETE_RESPONSE_ERROR: {
    message: '',
    error: {
      status: '400',
      message: 'Ha habido un error en la actualización del dato.'
    }
  }
}
