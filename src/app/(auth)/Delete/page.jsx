import React from 'react'
import Button from '../../../components/Button/Button'

function Delete() {
  return (
    <div className="flex flex-col items-center justify-center h-100vh py-20">
      <div className="border rounded-md shadow-xl lg:w-2/3 w-2/3 items-center justify-center flex flex-col py-10">
        <h1 className=" text-green-50 bold-18 mb-7 lg:mb-10">Delete your account ?</h1>
        <div>
        <Button title='Delete' href='/' type='submit' variant='btn_red'>
          <input type="submit" value="Delete"/>
        </Button>
        </div>
      </div>
    </div>
  )
}

export default Delete