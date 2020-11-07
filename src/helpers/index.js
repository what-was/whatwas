import { collatedNotes } from '../constants'

export const collatedNotesExist = selectedProject => {
    collatedNotes.find(task => task.key === selectedProject);
}