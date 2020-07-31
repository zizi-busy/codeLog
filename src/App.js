import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { logs } from './data/logs'
import { randomId } from './data/randomId'
import { date } from './data/date'

import Navbar from './components/Navbar'
/* import Footer from './components/Footer' */
import AddLog from './components/AddLog'
import Dashboard from './components/Dashboard'
import DeleteLog from './components/DeleteLog'
import EditLog from './components/EditLog'
import ReadLog from './components/ReadLog'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      log: {
        title: '',
        category: '',
        description: '',
      },
      logs: logs,
    }
  }

  deleteLog = (id) => {
    const log = { ...this.state.log, isDeleted: true }
    this.setState({ log })
    const copiedLog = [...this.state.logs]
    const deletedLog = copiedLog.filter((log) => log.id !== id)
    this.setState({ logs: deletedLog })
  }

  editLog = (id) => {
    const copiedLog = [...this.state.logs]
    const { title, category, description } = this.state.log
    const editedLog = copiedLog.filter((log) => log.id === id)
    editedLog[0].title = title
    editedLog[0].category = category
    editedLog[0].description = description
    editedLog[0].date = date()
    const filteredLog = copiedLog.filter((log) => log.id !== id)
    this.setState({ logs: [...editedLog, ...filteredLog] })
    this.setInitial()
  }

  editInput = (id) => {
    const copiedLog = [...this.state.logs]
    const log = {}
    for (const copyLog of copiedLog) {
      if (copyLog.id === id) {
        log.title = copyLog.title
        log.category = copyLog.category
        log.description = copyLog.description
      }
    }
    this.setState({ log })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    const log = { ...this.state.log, [name]: value }
    this.setState({ log })
  }

  addLog = () => {
    const newLog = { ...this.state.log, id: randomId(), date: date() }
    const logs = [newLog, ...this.state.logs]
    this.setState({ logs: logs })
    this.setInitial()
  }

  setInitial = () => {
    const log = {
      title: '',
      category: '',
      description: '',
    }
    this.setState({ log })
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/newlog"
            render={() => (
              <AddLog
                addLog={this.addLog}
                log={this.state.log}
                handleChange={this.handleChange}
                setInitial={this.setInitial}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Dashboard
                logs={this.state.logs}
                deleteLog={this.deleteLog}
                editLog={this.editLog}
              />
            )}
          />
          <Route
            exact
            path={`/log/:id`}
            render={(props) => {
              return (
                <ReadLog
                  id={props.match.params.id}
                  logs={this.state.logs}
                  test={props}
                  deleteLog={this.deleteLog}
                  editInput={this.editInput}
                  handleChange={this.handleChange}
                />
              )
            }}
          />
          <Route
            exact
            path={`/log/edit/:id`}
            render={(props) => {
              return (
                <EditLog
                  id={props.match.params.id}
                  editLog={this.editLog}
                  log={this.state.log}
                  setInitial={this.setInitial}
                  handleChange={this.handleChange}
                />
              )
            }}
          />
          <Route
            exact
            path={`/log/delete/:id`}
            render={(props) => {
              return (
                <DeleteLog
                  id={props.match.params.id}
                  deleteLog={this.deleteLog}
                />
              )
            }}
          />
        </Switch>
      </>
    )
  }
}

export default App
