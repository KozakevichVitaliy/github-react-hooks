import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return
        }

        github.clearUser()

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
            console.log('Make reauest with: ', value)
        } else {
            alert.show('Type user data!')
        }
    }

    return (
        <div className="form-group">
            <input
                value={value}
                type="text"
                className="form-control"
                placeholder="Type user nick"
                onKeyPress={onSubmit}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    )
}
