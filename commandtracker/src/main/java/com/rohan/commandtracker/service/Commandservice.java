
package com.rohan.commandtracker.service;

import org.springframework.stereotype.Service;
import java.util.List;

import com.rohan.commandtracker.model.Command;
import com.rohan.commandtracker.repository.CommandRepository;

@Service
public class Commandservice {

    private final CommandRepository repository;

    // Constructor Injection (Best Practice)
    public Commandservice(CommandRepository repository) {
        this.repository = repository;
    }

    // Get All Commands
    public List<Command> getAllCommands() {
        return repository.findAll();
    }

    // Save New Command
    public Command saveCommand(Command command) {
        return repository.save(command);
    }

    // ✅ Delete Command (Added Now)
    public void deleteCommand(Long id) {
        repository.deleteById(id);
    }
}